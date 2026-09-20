import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7-u_p-fd.css';
import '../../css/i/i-pz_kyqo.css';
import '../../css/g/gh40d-urt.css';
import '../../css/q/q77qc1b2j.css';
import '../../css/j/j3engrbmq.css';
import '../../css/q/qwny49b3x.css';
import '../../css/k/k68nhmbzn.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/y/yxywzy36x.css';
import '../../css/u/uaslgnbdb.css';
import '../../css/m/mvrjcacbw.css';
import '../../css/l/lxhipi8kl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle transform="rotate(-45 36 21.001)" class="h7-u_p-fd"/><path class="i-pz_kyqo"/><path class="gh40d-urt"/><path class="q77qc1b2j"/><ellipse transform="rotate(-45 27 31.002)" class="j3engrbmq"/><path class="qwny49b3x"/><path class="k68nhmbzn"/><g class="doj9dq_jg"><path class="yxywzy36x"/><path class="uaslgnbdb"/><path class="mvrjcacbw"/><path class="lxhipi8kl"/></g>`,
		"fallback": "openmoji:ice-cream",
	});
}

export default Component;
