import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_dxpcc8d.css';
import '../../css/t/tm9o1_bsg.css';
import '../../css/k/kyxecbcrt.css';
import '../../css/y/yvnwx-t5d.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="i_dxpcc8d"/><path class="tm9o1_bsg"/><path class="kyxecbcrt"/><path class="yvnwx-t5d"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-jamaica",
	});
}

export default Component;
