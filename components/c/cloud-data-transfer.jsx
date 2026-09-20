import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuf0xhbhd.css';
import '../../css/r/rn79y5brq.css';
import '../../css/q/qh3ul0cqs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xuf0xhbhd"/><path class="rn79y5brq"/><path class="qh3ul0cqs"/></g>`,
		"fallback": "streamline-flex-color:cloud-data-transfer",
	});
}

export default Component;
