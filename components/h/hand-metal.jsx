import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m6yx-othw.css';
import '../../css/k/kbum7tbkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m6yx-othw"/><path class="kbum7tbkt"/></g>`,
		"fallback": "hugeicons:hand-metal",
	});
}

export default Component;
