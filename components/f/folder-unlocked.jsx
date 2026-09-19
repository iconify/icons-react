import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hgsay03sp.css';
import '../../css/g/g9uae5tow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hgsay03sp"/><path class="g9uae5tow"/></g>`,
		"fallback": "hugeicons:folder-unlocked",
	});
}

export default Component;
