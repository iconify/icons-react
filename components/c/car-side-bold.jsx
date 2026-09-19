import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h2d8ur0oc.css';
import '../../css/l/ldbhdeycv.css';
import '../../css/w/w1uol0bxe.css';
import '../../css/y/y-vrt5a7c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h2d8ur0oc"/><path clip-rule="evenodd" class="ldbhdeycv"/><path class="w1uol0bxe"/><path class="y-vrt5a7c"/></g>`,
		"fallback": "glyphs:car-side-bold",
	});
}

export default Component;
