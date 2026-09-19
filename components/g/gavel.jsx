import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kxxz9nbly.css';
import '../../css/x/xa89v5hcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kxxz9nbly"/><path class="xa89v5hcx"/></g>`,
		"fallback": "hugeicons:gavel",
	});
}

export default Component;
