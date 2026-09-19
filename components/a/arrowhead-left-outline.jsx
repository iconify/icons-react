import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdjnet7ze.css';
import '../../css/v/vmbrozb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdjnet7ze"/><path class="vmbrozb2k"/>`,
		"fallback": "eva:arrowhead-left-outline",
	});
}

export default Component;
