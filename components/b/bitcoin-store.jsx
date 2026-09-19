import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vwr53xbwu.css';
import '../../css/o/o9tri0b7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vwr53xbwu"/><path class="o9tri0b7r"/></g>`,
		"fallback": "hugeicons:bitcoin-store",
	});
}

export default Component;
