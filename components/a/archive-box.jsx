import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hfvdmn1hc.css';
import '../../css/w/wdnwa_xpn.css';
import '../../css/f/fmhn5-0_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hfvdmn1hc"/><path class="wdnwa_xpn"/><path class="fmhn5-0_m"/></g>`,
		"fallback": "streamline-freehand-color:archive-box",
	});
}

export default Component;
