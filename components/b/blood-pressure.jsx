import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/br3c47miz.css';
import '../../css/f/fkvf9tbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="br3c47miz"/><path class="fkvf9tbkr"/></g>`,
		"fallback": "hugeicons:blood-pressure",
	});
}

export default Component;
