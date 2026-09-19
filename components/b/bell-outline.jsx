import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/ew1626x2j.css';
import '../../css/w/w0a1nnkln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ew1626x2j"/><path class="w0a1nnkln"/></g>`,
		"fallback": "bitcoin-icons:bell-outline",
	});
}

export default Component;
