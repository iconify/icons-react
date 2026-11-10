import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yh8uttzef.css';
import '../../css/m/m2_bo9b3j.css';
import '../../css/z/ztpy4pbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yh8uttzef"/><path class="m2_bo9b3j"/><path class="ztpy4pbfs"/></g>`,
		"fallback": "andrsrxn:favicon",
	});
}

export default Component;
