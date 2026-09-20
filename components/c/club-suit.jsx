import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pq5cb5bdm.css';
import '../../css/t/t_vy2fb2q.css';
import '../../css/n/nj181kbvo.css';
import '../../css/p/p9bkkbbld.css';
import '../../css/h/hxt4tbc8w.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/spyj9db5u.css';
import '../../css/s/s67mn91ji.css';
import '../../css/k/kr_65nsxp.css';
import '../../css/s/sqybvubgq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pq5cb5bdm"/><circle class="t_vy2fb2q"/><circle class="nj181kbvo"/><circle class="p9bkkbbld"/><path class="hxt4tbc8w"/><g class="jn8qy4bru"><path class="spyj9db5u"/><circle class="s67mn91ji"/><circle class="kr_65nsxp"/><circle class="sqybvubgq"/></g>`,
		"fallback": "openmoji:club-suit",
	});
}

export default Component;
