import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bmt38ebpo.css';
import '../../css/q/qvtciobpz.css';
import '../../css/r/r2xy8db8f.css';
import '../../css/d/dyng1obou.css';
import '../../css/k/kodu4vb2q.css';
import '../../css/y/ymq-tib4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bmt38ebpo"/><path class="qvtciobpz"/><path class="r2xy8db8f"/><path class="dyng1obou"/><path class="kodu4vb2q"/><path class="ymq-tib4j"/></g>`,
		"fallback": "solar:bluetooth-wave-broken",
	});
}

export default Component;
