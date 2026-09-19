import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s4xf7_lqd.css';
import '../../css/b/b4h22tbjt.css';
import '../../css/i/imbmv_-3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s4xf7_lqd"/><path class="b4h22tbjt"/><path class="imbmv_-3e"/></g>`,
		"fallback": "hugeicons:image-counter-clockwise",
	});
}

export default Component;
