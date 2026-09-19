import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tmyzhlx6d.css';
import '../../css/n/n7te-rcpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tmyzhlx6d"/><path class="n7te-rcpx"/></g>`,
		"fallback": "hugeicons:alien-01",
	});
}

export default Component;
