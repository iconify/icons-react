import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtpj97x1o.css';
import '../../css/d/d1n9r9ksb.css';
import '../../css/q/q2zzwivut.css';
import '../../css/h/he134g8jv.css';
import '../../css/c/cau7scc_q.css';
import '../../css/s/s15k2qqkb.css';
import '../../css/r/rgq8cl4gc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jtpj97x1o"/><path class="d1n9r9ksb"/><path class="q2zzwivut"/><path class="he134g8jv"/><path class="cau7scc_q"/><path class="s15k2qqkb"/><path class="rgq8cl4gc"/></g>`,
		"fallback": "icon-park:fireworks",
	});
}

export default Component;
