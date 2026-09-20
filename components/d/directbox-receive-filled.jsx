import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xj2jk1knb.css';
import '../../css/q/qpnjtccha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xj2jk1knb"/><path class="qpnjtccha"/></g>`,
		"fallback": "reicon:directbox-receive-filled",
	});
}

export default Component;
