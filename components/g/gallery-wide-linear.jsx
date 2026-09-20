import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/icv_d8bop.css';
import '../../css/m/mqv8oacrv.css';
import '../../css/t/t5vsymb5k.css';
import '../../css/q/q3b3n4bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="icv_d8bop"/><path class="mqv8oacrv"/><circle class="t5vsymb5k"/><path class="q3b3n4bkx"/></g>`,
		"fallback": "solar:gallery-wide-linear",
	});
}

export default Component;
