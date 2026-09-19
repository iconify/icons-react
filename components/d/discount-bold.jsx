import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/no83u0bsh.css';
import '../../css/w/w7m9x29_w.css';
import '../../css/k/k19608e-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="no83u0bsh"/><path class="w7m9x29_w"/><path class="k19608e-r"/></g>`,
		"fallback": "iconamoon:discount-bold",
	});
}

export default Component;
