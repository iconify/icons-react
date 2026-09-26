import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gw5io-bbr.css';
import '../../css/b/bejwiwtrh.css';
import '../../css/j/jtsi5u_mv.css';
import '../../css/n/nc2b2uohv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gw5io-bbr"/><path class="bejwiwtrh"/><path class="jtsi5u_mv"/><path clip-rule="evenodd" class="nc2b2uohv"/></g>`,
		"fallback": "solar:bot-outline",
	});
}

export default Component;
