import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pt51xml6b.css';
import '../../css/a/a88hk_b_f.css';
import '../../css/b/bw8hfotfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pt51xml6b"/><path class="a88hk_b_f"/><path class="bw8hfotfq"/></g>`,
		"fallback": "hugeicons:crab",
	});
}

export default Component;
