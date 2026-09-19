import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lr66prb0t.css';
import '../../css/y/ykze_p25s.css';
import '../../css/k/kpijebsht.css';
import '../../css/q/q0zr2_byl.css';
import '../../css/s/szc7oi9wa.css';
import '../../css/k/kfnv93bxu.css';
import '../../css/x/xygtp_bbx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lr66prb0t"/><path class="ykze_p25s"/><path class="kpijebsht"/><path class="q0zr2_byl"/><path class="szc7oi9wa"/><path class="kfnv93bxu"/><path class="xygtp_bbx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:control-knobs",
	});
}

export default Component;
