import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/n0qh4ngqs.css';
import '../../css/c/cdhs5lb-o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="n0qh4ngqs"/><path class="cdhs5lb-o"/></g>`,
		"fallback": "garden:check-box-double-stroke-16",
	});
}

export default Component;
