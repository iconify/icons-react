import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xvj31lbcb.css';
import '../../css/l/lym9ap20r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xvj31lbcb"/><path class="lym9ap20r"/></g>`,
		"fallback": "hugeicons:energy-rectangle",
	});
}

export default Component;
