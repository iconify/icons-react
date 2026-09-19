import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g9uae5tow.css';
import '../../css/j/jw78llbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g9uae5tow"/><path class="jw78llbic"/></g>`,
		"fallback": "hugeicons:folder-favourite",
	});
}

export default Component;
