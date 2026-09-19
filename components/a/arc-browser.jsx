import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/ht8w8wbpe.css';
import '../../css/u/uz8ob69oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ht8w8wbpe"/><path class="uz8ob69oc"/></g>`,
		"fallback": "hugeicons:arc-browser",
	});
}

export default Component;
