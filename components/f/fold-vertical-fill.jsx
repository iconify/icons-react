import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdhb_e1dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdhb_e1dj"/>`,
		"fallback": "mingcute:fold-vertical-fill",
	});
}

export default Component;
