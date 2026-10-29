import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u_jv868wi.css';
import '../../css/s/sw1e5_zio.css';
import '../../css/o/oags8zbjj.css';
import '../../css/l/lhr7mp78x.css';
import '../../css/a/al_hgmb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u_jv868wi wm-k"/><path class="sw1e5_zio wm-a"/><path class="oags8zbjj wm-shadow"/><path class="lhr7mp78x wm-k"/><path class="al_hgmb2q wm-a"/></g>`,
		"fallback": "withicons:cloud-fog-engrave",
	});
}

export default Component;
