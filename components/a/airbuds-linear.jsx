import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z3s_59bff.css';
import '../../css/o/o6tcadbfr.css';
import '../../css/o/oomb74bzs.css';
import '../../css/c/cx0jtacae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z3s_59bff"/><path class="o6tcadbfr"/><path class="oomb74bzs"/><path class="cx0jtacae"/></g>`,
		"fallback": "solar:airbuds-linear",
	});
}

export default Component;
