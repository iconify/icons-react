import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/edbrcnc5p.css';
import '../../css/s/sky80ibxo.css';
import '../../css/o/ol-kpp5cg.css';
import '../../css/m/mj_mud4nl.css';
import '../../css/k/kjmig_qpk.css';
import '../../css/h/hnamav36t.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="edbrcnc5p wm-k"/><path class="sky80ibxo wm-a"/><path class="ol-kpp5cg wm-s"/><path class="mj_mud4nl wm-shadow"/><path class="kjmig_qpk wm-k"/><path class="hnamav36t wm-a"/><path class="qr4ochb5c wm-s"/></g>`,
		"fallback": "withicons:bell-off-engrave",
	});
}

export default Component;
