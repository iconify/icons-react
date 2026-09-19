import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e4l6s_b1d.css';
import '../../css/w/wuft_1bog.css';
import '../../css/q/qy6mi32jc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e4l6s_b1d"/><path class="wuft_1bog"/><path class="qy6mi32jc"/></g>`,
		"fallback": "hugeicons:galaxy",
	});
}

export default Component;
