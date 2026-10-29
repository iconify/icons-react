import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xpk-u_b6m.css';
import '../../css/n/nq3ku6b8r.css';
import '../../css/c/czpi4dbkk.css';
import '../../css/l/lp9350hqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xpk-u_b6m"/><path class="nq3ku6b8r wm-a"/><path class="czpi4dbkk wm-k"/><path class="lp9350hqv wm-a"/></g>`,
		"fallback": "withicons:grid-2x2-sketch",
	});
}

export default Component;
