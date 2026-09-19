import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/asq35zbba.css';
import '../../css/d/d34t52bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="asq35zbba"/><path class="d34t52bcx"/></g>`,
		"fallback": "hugeicons:folder-closed",
	});
}

export default Component;
