import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q6sxrefrm.css';
import '../../css/t/t6v6tsbap.css';
import '../../css/e/eaawxs6pa.css';
import '../../css/m/mxif8x02a.css';
import '../../css/v/v-gvr6i-y.css';
import '../../css/k/k17mwrv5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q6sxrefrm wm-k"/><path class="t6v6tsbap wm-k"/><path class="eaawxs6pa wm-k"/><path class="mxif8x02a wm-a"/><path class="v-gvr6i-y wm-k"/><path class="k17mwrv5a wm-k"/></g>`,
		"fallback": "withicons:angry-sketch",
	});
}

export default Component;
