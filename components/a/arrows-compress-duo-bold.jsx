import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bwc47kb7e.css';
import '../../css/h/hqpee5bzp.css';
import '../../css/g/gx2ftuxqj.css';
import '../../css/q/q8g393bjr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bwc47kb7e"/><path class="hqpee5bzp"/><path class="gx2ftuxqj"/><path class="q8g393bjr"/></g>`,
		"fallback": "glyphs:arrows-compress-duo-bold",
	});
}

export default Component;
