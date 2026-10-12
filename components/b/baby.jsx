import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6jlygupp.css';
import '../../css/y/y28_79bmh.css';
import '../../css/x/x3g3dcufv.css';
import '../../css/s/sldqc1bvx.css';
import '../../css/j/jz1rzgnor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p6jlygupp"/><path class="y28_79bmh"/><path class="x3g3dcufv"/><path class="sldqc1bvx"/><path class="jz1rzgnor"/></g>`,
		"fallback": "andrsrxn:baby",
	});
}

export default Component;
