import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x3d3oubxt.css';
import '../../css/z/zcukp2pnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x3d3oubxt"/><path class="zcukp2pnt"/></g>`,
		"fallback": "andrsrxn:chart-line-up",
	});
}

export default Component;
