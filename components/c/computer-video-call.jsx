import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m5a5-bcyv.css';
import '../../css/l/lv7167b3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m5a5-bcyv"/><path class="lv7167b3m"/></g>`,
		"fallback": "hugeicons:computer-video-call",
	});
}

export default Component;
