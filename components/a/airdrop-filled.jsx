import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ldnjy29ps.css';
import '../../css/n/nv9013mnf.css';
import '../../css/k/ksnd1ac_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ldnjy29ps"/><path class="nv9013mnf"/><path class="ksnd1ac_o"/></g>`,
		"fallback": "reicon:airdrop-filled",
	});
}

export default Component;
