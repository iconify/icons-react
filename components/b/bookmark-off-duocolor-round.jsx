import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lmxlbqbeq.css';
import '../../css/w/w8ucpnboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lmxlbqbeq"/><path class="w8ucpnboo"/></g>`,
		"fallback": "coolicons:bookmark-off-duocolor-round",
	});
}

export default Component;
