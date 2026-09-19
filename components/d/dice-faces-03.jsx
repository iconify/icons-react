import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/idv-8ugwc.css';
import '../../css/b/bn2yiibcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="idv-8ugwc"/><path class="bn2yiibcg"/></g>`,
		"fallback": "hugeicons:dice-faces-03",
	});
}

export default Component;
