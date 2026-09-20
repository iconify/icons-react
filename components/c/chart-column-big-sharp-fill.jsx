import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kqd306yel.css';
import '../../css/g/gtvwdabcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kqd306yel"/><path class="gtvwdabcz"/></g>`,
		"fallback": "keyline-icons:chart-column-big-sharp-fill",
	});
}

export default Component;
