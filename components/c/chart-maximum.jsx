import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zcukp2pnt.css';
import '../../css/o/otz5mibdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zcukp2pnt"/><path class="otz5mibdd"/></g>`,
		"fallback": "andrsrxn:chart-maximum",
	});
}

export default Component;
