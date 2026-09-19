import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/db_o6pbco.css';
import '../../css/z/zr2te8zai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="db_o6pbco"/><path class="zr2te8zai"/></g>`,
		"fallback": "hugeicons:folder-upload",
	});
}

export default Component;
