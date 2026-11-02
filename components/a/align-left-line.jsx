import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjogw_dsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjogw_dsf"/>`,
		"fallback": "mingcute:align-left-line",
	});
}

export default Component;
