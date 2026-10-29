import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/x_bxa3bco.css';
import '../../css/m/mdild8e_v.css';
import '../../css/a/aciylybvm.css';
import '../../css/n/n9em5fasb.css';
import '../../css/o/oc_qcrgei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k x_bxa3bco"/><path class="mdild8e_v wm-a"/><path class="aciylybvm wm-shadow"/><path class="n9em5fasb wm-k"/><path class="oc_qcrgei wm-a"/></g>`,
		"fallback": "withicons:award-engrave",
	});
}

export default Component;
