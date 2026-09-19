import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mpb4xabwm.css';
import '../../css/h/h3kdkghdv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="mpb4xabwm"/><path clip-rule="evenodd" class="h3kdkghdv"/></g>`,
		"fallback": "glyphs:battery-car-bold",
	});
}

export default Component;
