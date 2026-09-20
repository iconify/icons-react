import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c3r8gzq-h.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c3r8gzq-h"/><path class="pw8f5c0fp"/></g>`,
		"fallback": "solar:clock-square-linear",
	});
}

export default Component;
