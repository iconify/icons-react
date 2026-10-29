import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qit8uhbvr.css';
import '../../css/i/i6o2gh9jr.css';
import '../../css/g/g57pb1-tv.css';
import '../../css/p/pyldh9-2r.css';
import '../../css/h/h1js73brr.css';
import '../../css/k/k2p9idmnc.css';
import '../../css/c/cv62qmlrj.css';
import '../../css/b/buidcqb7h.css';
import '../../css/g/gpn_a8bru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qit8uhbvr wm-k"/><path class="i6o2gh9jr wm-a"/><path class="g57pb1-tv wm-shadow"/><path class="pyldh9-2r wm-k"/><path class="h1js73brr wm-a"/><circle class="k2p9idmnc wm-a"/><circle class="cv62qmlrj wm-a"/><circle class="buidcqb7h wm-a"/><circle class="gpn_a8bru wm-a"/></g>`,
		"fallback": "withicons:alpana-engrave",
	});
}

export default Component;
