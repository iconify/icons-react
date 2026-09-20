import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az6pvjqpc.css';
import '../../css/v/vhxrlobrc.css';
import '../../css/d/dg7x3waqv.css';
import '../../css/j/j1q88ibrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="az6pvjqpc"/><path class="vhxrlobrc"/><path class="dg7x3waqv"/><path class="j1q88ibrs"/></g>`,
		"fallback": "streamline-cyber-color:business-handshake-deal",
	});
}

export default Component;
