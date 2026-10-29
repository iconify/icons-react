import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/otn615brv.css';
import '../../css/t/t11oax-ii.css';
import '../../css/q/q09dc-bgx.css';
import '../../css/c/cwgdkh65v.css';
import '../../css/m/m0e5clb6s.css';
import '../../css/v/v_g-11bdp.css';
import '../../css/w/wadxu1jtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="otn615brv"/><path class="t11oax-ii wm-k"/><path class="q09dc-bgx wm-k"/><path class="cwgdkh65v wm-a"/><circle class="m0e5clb6s wm-a"/><circle class="v_g-11bdp wm-a"/><path class="wadxu1jtg wm-s"/></g>`,
		"fallback": "withicons:champagne-toast-sketch",
	});
}

export default Component;
