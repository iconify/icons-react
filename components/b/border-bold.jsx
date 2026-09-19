import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/od6v5mlgj.css';
import '../../css/x/xia6hrhwq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="od6v5mlgj"/><path class="xia6hrhwq"/></g>`,
		"fallback": "glyphs:border-bold",
	});
}

export default Component;
