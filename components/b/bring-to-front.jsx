import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vl_w8n0cw.css';
import '../../css/l/lmxu9zjdc.css';
import '../../css/q/q63yn0pph.css';
import '../../css/t/tdqgxtbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vl_w8n0cw"/><path class="lmxu9zjdc"/><path class="q63yn0pph"/><path class="tdqgxtbnf"/></g>`,
		"fallback": "andrsrxn:bring-to-front",
	});
}

export default Component;
