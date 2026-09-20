import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nde522b_j.css';
import '../../css/m/mqx6s1bdl.css';
import '../../css/d/d8kbcbc-x.css';
import '../../css/o/oe3mmobcy.css';
import '../../css/g/gr8o3obgp.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nde522b_j"/><path class="mqx6s1bdl"/><path class="d8kbcbc-x"/><path class="oe3mmobcy"/><path class="gr8o3obgp"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:gay",
	});
}

export default Component;
