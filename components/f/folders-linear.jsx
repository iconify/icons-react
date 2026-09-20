import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fb7cjcc-p.css';
import '../../css/v/v8lww4qlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fb7cjcc-p"/><path class="v8lww4qlw"/></g>`,
		"fallback": "solar:folders-linear",
	});
}

export default Component;
