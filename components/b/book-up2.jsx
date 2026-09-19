import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/krmxiabxo.css';
import '../../css/i/i_x84lb6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="krmxiabxo"/><path class="i_x84lb6p"/></g>`,
		"fallback": "hugeicons:book-up2",
	});
}

export default Component;
