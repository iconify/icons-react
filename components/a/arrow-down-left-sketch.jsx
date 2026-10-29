import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u-eo-eb_s.css';
import '../../css/s/sov9jobbh.css';
import '../../css/b/bd3wwabse.css';
import '../../css/m/mugdapbyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u-eo-eb_s wm-k"/><path class="sov9jobbh wm-a"/><path class="bd3wwabse wm-k"/><path class="mugdapbyt wm-a"/></g>`,
		"fallback": "withicons:arrow-down-left-sketch",
	});
}

export default Component;
