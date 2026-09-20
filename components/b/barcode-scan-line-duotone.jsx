import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oke5ittoy.css';
import '../../css/i/i4kkq_9oy.css';
import '../../css/m/msxlffrej.css';
import '../../css/h/htjp6vbcb.css';
import '../../css/o/oja1tdbnv.css';
import '../../css/q/qsmbhrb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oke5ittoy"/><path class="i4kkq_9oy"/><path class="msxlffrej"/><path class="htjp6vbcb"/><rect class="oja1tdbnv"/><rect class="qsmbhrb9y"/></g>`,
		"fallback": "solar:barcode-scan-line-duotone",
	});
}

export default Component;
