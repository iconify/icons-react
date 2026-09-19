import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usz420qgc.css';
import '../../css/k/kdeow8k2g.css';
import '../../css/z/zw5w2lbvd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="usz420qgc"><path class="kdeow8k2g"/><path class="zw5w2lbvd"/></g>`,
		"fallback": "glyphs:bike-bold",
	});
}

export default Component;
