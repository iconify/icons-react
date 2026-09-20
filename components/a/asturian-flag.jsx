import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/l/l8k5mmb-i.css';
import '../../css/g/gy_p03b3v.css';
import '../../css/e/exkbc9b_o.css';
import '../../css/x/xluusacxr.css';
import '../../css/g/g1p4lebsw.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="l8k5mmb-i"/><path class="gy_p03b3v"/><path class="exkbc9b_o"/><path class="xluusacxr"/><circle class="g1p4lebsw"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:asturian-flag",
	});
}

export default Component;
