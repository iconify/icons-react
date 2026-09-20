import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryzr5jw8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryzr5jw8i"/>`,
		"fallback": "tabler:bath-filled",
	});
}

export default Component;
