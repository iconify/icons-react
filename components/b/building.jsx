import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ijddvyb3m.css';
import '../../css/n/ny379ofjh.css';
import '../../css/b/b5koxcuah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ijddvyb3m"/><path class="ny379ofjh"/><path class="b5koxcuah"/></g>`,
		"fallback": "hugeicons:building",
	});
}

export default Component;
