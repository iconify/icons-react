import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rne-a9b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rne-a9b6t"/>`,
		"fallback": "bxs:battery",
	});
}

export default Component;
