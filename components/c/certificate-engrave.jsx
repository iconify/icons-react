import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dd23j2bso.css';
import '../../css/m/mxofy6bls.css';
import '../../css/g/gkb_ajwap.css';
import '../../css/c/clwivwvku.css';
import '../../css/w/w09xprbay.css';
import '../../css/w/wtll6dz5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dd23j2bso wm-k"/><path class="mxofy6bls wm-a"/><path class="gkb_ajwap wm-shadow"/><path class="clwivwvku wm-k"/><path class="w09xprbay wm-a"/><path class="wm-a wtll6dz5m"/></g>`,
		"fallback": "withicons:certificate-engrave",
	});
}

export default Component;
