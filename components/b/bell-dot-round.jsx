import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t97dd4xnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t97dd4xnr"/>`,
		"fallback": "coolicons:bell-dot-round",
	});
}

export default Component;
