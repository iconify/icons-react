import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/l_ysdhbcq.css';
import '../../css/z/zh3_mmb6e.css';
import '../../css/y/yl8nvnbzd.css';
import '../../css/m/msx3sr11t.css';
import '../../css/d/duiqvnbvk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="l_ysdhbcq"/><path class="zh3_mmb6e"/><path class="yl8nvnbzd"/><path class="msx3sr11t"/><path class="duiqvnbvk"/></g>`,
		"fallback": "icon-park:coupon",
	});
}

export default Component;
