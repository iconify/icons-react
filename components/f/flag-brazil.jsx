import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/x/xc5k4_b9x.css';
import '../../css/m/mg_mvc0ey.css';
import '../../css/j/jc6vj6bpr.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="xc5k4_b9x"/><circle class="mg_mvc0ey"/><path class="jc6vj6bpr"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-brazil",
	});
}

export default Component;
