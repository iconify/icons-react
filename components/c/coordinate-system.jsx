import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/z/zba7elpoj.css';
import '../../css/v/vq4h-30hj.css';
import '../../css/x/x-k2_mhao.css';
import '../../css/l/lcmemmihy.css';
import '../../css/l/lp_ipabev.css';
import '../../css/m/mmbk130cf.css';
import '../../css/e/ev_pil2dq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="zba7elpoj"/><path class="vq4h-30hj"/><path class="x-k2_mhao"/><path class="lcmemmihy"/><path class="lp_ipabev"/><path class="mmbk130cf"/><path class="ev_pil2dq"/></g>`,
		"fallback": "icon-park:coordinate-system",
	});
}

export default Component;
