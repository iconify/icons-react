import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/codjm1acu.css';
import '../../css/h/h8ttso15c.css';
import '../../css/r/ryyz-1bps.css';
import '../../css/k/kxlucmbiy.css';
import '../../css/f/fh2xy0b3d.css';
import '../../css/q/qk2e1no_x.css';
import '../../css/g/g_s__8q2d.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="codjm1acu"/><path class="h8ttso15c"/><path class="ryyz-1bps"/><circle class="kxlucmbiy"/><circle class="fh2xy0b3d"/><circle class="qk2e1no_x"/><path class="g_s__8q2d"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-philippines",
	});
}

export default Component;
