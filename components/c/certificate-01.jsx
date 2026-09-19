import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t09li8i5q.css';
import '../../css/f/f50_37s_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t09li8i5q"/><path class="f50_37s_d"/></g>`,
		"fallback": "hugeicons:certificate-01",
	});
}

export default Component;
