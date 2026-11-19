import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t39dhopfz.css';
import '../../css/y/ywpdtn-ac.css';
import '../../css/m/m66k3dbfn.css';
import '../../css/s/sg17w3b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t39dhopfz"/><path class="ywpdtn-ac"/><path class="m66k3dbfn"/><path class="sg17w3b_v"/></g>`,
		"fallback": "andrsrxn:cloud",
	});
}

export default Component;
