import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/amrleybkj.css';
import '../../css/t/tu8z24q4c.css';
import '../../css/m/mzol8ljjp.css';
import '../../css/q/q8g2gcb5e.css';
import '../../css/v/vz0_31kyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="amrleybkj"/><path class="tu8z24q4c wm-k"/><path class="mzol8ljjp wm-a"/><path class="q8g2gcb5e wm-k"/><path class="vz0_31kyq wm-a"/></g>`,
		"fallback": "withicons:file-input-sketch",
	});
}

export default Component;
