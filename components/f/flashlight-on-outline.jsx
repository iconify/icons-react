import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qrv48pbgw.css';
import '../../css/k/kv3pi7b2z.css';
import '../../css/h/hiflofblr.css';
import '../../css/l/lmmiwvbbm.css';
import '../../css/x/xwcqrabbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qrv48pbgw"/><path clip-rule="evenodd" class="kv3pi7b2z"/><path class="hiflofblr"/><path class="lmmiwvbbm"/><path class="xwcqrabbg"/></g>`,
		"fallback": "solar:flashlight-on-outline",
	});
}

export default Component;
