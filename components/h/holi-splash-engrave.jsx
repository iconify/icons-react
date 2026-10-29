import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/paaex7b3t.css';
import '../../css/k/k0iazjjcg.css';
import '../../css/j/j3pcogo4i.css';
import '../../css/e/ea8z-ybmv.css';
import '../../css/i/ievz6-bgp.css';
import '../../css/k/k6dkddbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="paaex7b3t wm-k"/><path class="k0iazjjcg wm-s"/><path class="j3pcogo4i wm-shadow"/><path class="ea8z-ybmv wm-k"/><path class="ievz6-bgp wm-a"/><path class="k6dkddbtm wm-s"/></g>`,
		"fallback": "withicons:holi-splash-engrave",
	});
}

export default Component;
