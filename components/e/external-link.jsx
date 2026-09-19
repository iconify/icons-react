import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t4n-0vbyy.css';
import '../../css/p/psy_0nbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t4n-0vbyy"/><path class="psy_0nbgz"/></g>`,
		"fallback": "hugeicons:external-link",
	});
}

export default Component;
