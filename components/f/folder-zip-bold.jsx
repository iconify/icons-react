import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aacscibqs.css';
import '../../css/e/eb5tcvbtp.css';
import '../../css/s/sfauigbbe.css';
import '../../css/i/ifa-yz19u.css';
import '../../css/r/rrwbpbbol.css';
import '../../css/p/pizwsrbwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aacscibqs"/><path clip-rule="evenodd" class="eb5tcvbtp"/><path class="sfauigbbe"/><path class="ifa-yz19u"/><path class="rrwbpbbol"/><path class="pizwsrbwd"/></g>`,
		"fallback": "solar:folder-zip-bold",
	});
}

export default Component;
