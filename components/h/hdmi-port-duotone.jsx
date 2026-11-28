import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpwhi_cet.css';
import '../../css/d/da5jt-nvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qpwhi_cet secondary"/><path class="da5jt-nvr primary"/></g>`,
		"fallback": "iconaut:hdmi-port-duotone",
	});
}

export default Component;
