import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thczbgpth.css';
import '../../css/x/xhltgtbxp.css';
import '../../css/u/u4y469fmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="thczbgpth"/><path class="xhltgtbxp"/><path class="u4y469fmr"/></g>`,
		"fallback": "andrsrxn:cpu",
	});
}

export default Component;
