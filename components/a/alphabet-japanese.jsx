import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jnez-x7vc.css';
import '../../css/d/d8boerbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jnez-x7vc"/><path class="d8boerbcp"/></g>`,
		"fallback": "hugeicons:alphabet-japanese",
	});
}

export default Component;
