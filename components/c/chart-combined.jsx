import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sh2-7cbtf.css';
import '../../css/z/zcukp2pnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sh2-7cbtf"/><path class="zcukp2pnt"/></g>`,
		"fallback": "andrsrxn:chart-combined",
	});
}

export default Component;
