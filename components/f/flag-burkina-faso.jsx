import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wism3vaym.css';
import '../../css/z/zq0gwsbsg.css';
import '../../css/q/q_7zwv0fz.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wism3vaym"/><path class="zq0gwsbsg"/><path class="q_7zwv0fz"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-burkina-faso",
	});
}

export default Component;
