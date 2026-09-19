import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/pecnanbvp.css';
import '../../css/c/cj7d3-_ud.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="pecnanbvp"/><path class="cj7d3-_ud"/></g>`,
		"fallback": "garden:check-box-stroke-12",
	});
}

export default Component;
