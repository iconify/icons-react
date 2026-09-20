import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lhbi7cc6b.css';
import '../../css/g/gtvwdabcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lhbi7cc6b"/><path class="gtvwdabcz"/></g>`,
		"fallback": "keyline-icons:chart-column-stacked-sharp-fill",
	});
}

export default Component;
