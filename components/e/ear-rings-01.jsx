import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ioae2nmcg.css';
import '../../css/j/ja-gx6blr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ioae2nmcg"/><path class="ja-gx6blr"/></g>`,
		"fallback": "hugeicons:ear-rings-01",
	});
}

export default Component;
