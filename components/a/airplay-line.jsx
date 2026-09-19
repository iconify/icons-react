import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kihg_xb7g.css';
import '../../css/f/frmku5bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kihg_xb7g"/><path class="frmku5bwo"/></g>`,
		"fallback": "hugeicons:airplay-line",
	});
}

export default Component;
