import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5eak3k2p.css';
import '../../css/b/bslz_bbuu.css';
import '../../css/e/ejcyxo01y.css';
import '../../css/k/k4ioodklp.css';
import '../../css/h/hx1nfky-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l5eak3k2p"><path class="bslz_bbuu wm-shadow"/><path class="ejcyxo01y"/><path class="k4ioodklp"/><path class="hx1nfky-k"/></g>`,
		"fallback": "withicons-brutal:bold",
	});
}

export default Component;
