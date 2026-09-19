import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kuy1kvb6r.css';
import '../../css/b/b883-jluz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kuy1kvb6r"/><path class="b883-jluz"/></g>`,
		"fallback": "hugeicons:folder-add",
	});
}

export default Component;
