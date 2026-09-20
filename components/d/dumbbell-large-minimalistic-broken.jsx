import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fjpkh_y_d.css';
import '../../css/x/xm78w9bdm.css';
import '../../css/t/tfw8uqbyb.css';
import '../../css/t/t2m3jlpnn.css';
import '../../css/v/vte9i7bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fjpkh_y_d"/><path class="xm78w9bdm"/><path class="tfw8uqbyb"/><path class="t2m3jlpnn"/><path class="vte9i7bqc"/></g>`,
		"fallback": "solar:dumbbell-large-minimalistic-broken",
	});
}

export default Component;
