import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkq7-hbwz.css';
import '../../css/l/l3q1ft-lk.css';
import '../../css/w/wwjrytb2n.css';
import '../../css/i/i95yefugg.css';
import '../../css/l/ljtz1acgp.css';
import '../../css/z/z-1p72wln.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkq7-hbwz"/><path class="l3q1ft-lk"/><path class="wwjrytb2n"/><path class="i95yefugg"/><path class="ljtz1acgp"/><path class="z-1p72wln"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-french-polynesia",
	});
}

export default Component;
