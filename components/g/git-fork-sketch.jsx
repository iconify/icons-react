import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/dn3saf1hp.css';
import '../../css/b/bentd_y0y.css';
import '../../css/s/stx585s_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="dn3saf1hp"/><path class="bentd_y0y"/><path class="stx585s_r"/></g>`,
		"fallback": "withicons:git-fork-sketch",
	});
}

export default Component;
