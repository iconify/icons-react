import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/ep-fn5bfv.css';
import '../../css/q/qx9_7wqsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ep-fn5bfv"/><path class="qx9_7wqsg"/></g>`,
		"fallback": "streamline-cyber:account-lock",
	});
}

export default Component;
