import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/u93o42bhq.css';
import '../../css/v/vdvntxe0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="u93o42bhq"/><path class="vdvntxe0p"/></g>`,
		"fallback": "hugeicons:flower",
	});
}

export default Component;
