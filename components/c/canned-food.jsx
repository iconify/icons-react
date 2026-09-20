import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otgkl0nrs.css';
import '../../css/n/n01c6abxh.css';
import '../../css/n/n3q9-q2nr.css';
import '../../css/a/a50gwlpsq.css';
import '../../css/g/gdovo3b2r.css';
import '../../css/q/qj4qftdpb.css';
import '../../css/d/do5qdybzz.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/l/lk7ektmlf.css';
import '../../css/n/nu2eeog9x.css';
import '../../css/h/ha6mjg4ym.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otgkl0nrs"/><path class="n01c6abxh"/><path class="n3q9-q2nr"/><ellipse class="a50gwlpsq"/><ellipse class="gdovo3b2r"/><path class="qj4qftdpb"/><path class="do5qdybzz"/><g class="kdz4acc8r"><path class="lk7ektmlf"/><path class="nu2eeog9x"/><path class="ha6mjg4ym"/></g>`,
		"fallback": "openmoji:canned-food",
	});
}

export default Component;
