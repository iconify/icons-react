import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh-gbfbpk.css';
import '../../css/u/uu4s7cbij.css';
import '../../css/b/bml76zbiv.css';
import '../../css/t/t37dppbei.css';
import '../../css/p/p95kvcc8n.css';
import '../../css/i/i-oanjbgb.css';
import '../../css/w/wf4-i74se.css';
import '../../css/a/a_qmycr5u.css';
import '../../css/v/vy593mbhv.css';
import '../../css/l/lq8_j9bbi.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh-gbfbpk"/><path class="uu4s7cbij"/><path class="bml76zbiv"/><path class="t37dppbei"/><path class="p95kvcc8n"/><path class="i-oanjbgb"/><path class="wf4-i74se"/><path class="a_qmycr5u"/><path class="vy593mbhv"/><path class="lq8_j9bbi"/>`,
		"fallback": "devicon:aerospace",
	});
}

export default Component;
