import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lwnp_lbfh.css';
import '../../css/b/bzgntubhg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><ellipse class="lwnp_lbfh"/><path class="bzgntubhg"/></g>`,
		"fallback": "garden:database-stroke-12",
	});
}

export default Component;
