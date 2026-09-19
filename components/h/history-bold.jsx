import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zr39jv2gn.css';
import '../../css/f/f5bdngp0q.css';
import '../../css/o/odj6qrbln.css';

const viewBox = {"width":81,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zr39jv2gn"/><path class="f5bdngp0q"/><path class="odj6qrbln"/></g>`,
		"fallback": "glyphs:history-bold",
	});
}

export default Component;
