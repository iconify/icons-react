import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wclrnbc5v.css';
import '../../css/r/r-s-tebmz.css';
import '../../css/g/gvxu7wpiu.css';
import '../../css/b/bn831ebwf.css';

const viewBox = {"width":82,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wclrnbc5v"/><path clip-rule="evenodd" class="r-s-tebmz"/><path clip-rule="evenodd" class="gvxu7wpiu"/><path class="bn831ebwf"/></g>`,
		"fallback": "glyphs:car-tilt-bold",
	});
}

export default Component;
