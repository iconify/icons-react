import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/h/hv6swfkbm.css';
import '../../css/n/nz24x5b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="hv6swfkbm"/><path class="nz24x5b_y"/></g>`,
		"fallback": "proicons:fast-forward",
	});
}

export default Component;
