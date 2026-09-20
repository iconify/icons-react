import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9d678b1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9d678b1s"/>`,
		"fallback": "tabler:cast-off",
	});
}

export default Component;
