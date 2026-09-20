import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kx20q439v.css';
import '../../css/h/hvvoqqwjn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kx20q439v"/><path class="hvvoqqwjn"/></g>`,
		"fallback": "solar:fire-line-duotone",
	});
}

export default Component;
