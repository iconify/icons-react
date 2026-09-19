import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/r/ruz512j_u.css';
import '../../css/u/uga2crnyr.css';
import '../../css/m/mqagjup6g.css';
import '../../css/c/caf_fxb9y.css';
import '../../css/k/kv1vtvbno.css';
import '../../css/x/x3r4eab0k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ruz512j_u"/><path class="uga2crnyr"/><path class="mqagjup6g"/><rect class="caf_fxb9y"/><path class="kv1vtvbno"/><path class="x3r4eab0k"/></g>`,
		"fallback": "icon-park:bee",
	});
}

export default Component;
