import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/ulnk4ybsa.css';
import '../../css/w/w2-6cebly.css';
import '../../css/t/t2l5vjgzu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="ulnk4ybsa"/><circle class="w2-6cebly"/><path class="t2l5vjgzu"/></g>`,
		"fallback": "garden:adjust-stroke-12",
	});
}

export default Component;
