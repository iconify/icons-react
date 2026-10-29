import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/m2k9fhd-l.css';
import '../../css/s/sqrd_kulg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="m2k9fhd-l wm-k"/><path class="sqrd_kulg wm-k"/></g>`,
		"fallback": "withicons:chevron-up-sketch",
	});
}

export default Component;
