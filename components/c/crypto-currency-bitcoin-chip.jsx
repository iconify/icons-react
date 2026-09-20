import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sqplmn_je.css';
import '../../css/d/dtysabkiu.css';
import '../../css/s/sor96cbcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sqplmn_je"/><path class="dtysabkiu"/><path class="sor96cbcn"/></g>`,
		"fallback": "streamline-freehand:crypto-currency-bitcoin-chip",
	});
}

export default Component;
