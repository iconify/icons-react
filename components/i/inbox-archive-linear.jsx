import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/x/xyrhgtb_n.css';
import '../../css/l/lz7s8lgsy.css';
import '../../css/p/p7dcq8xrw.css';
import '../../css/s/s4echkz_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="xyrhgtb_n"/><path class="lz7s8lgsy"/><path class="p7dcq8xrw"/><path class="s4echkz_l"/></g>`,
		"fallback": "solar:inbox-archive-linear",
	});
}

export default Component;
