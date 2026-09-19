import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x676eyzld.css';
import '../../css/i/i2h23ab7x.css';
import '../../css/v/vzoaje6mh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x676eyzld"/><path class="i2h23ab7x"/><path clip-rule="evenodd" class="vzoaje6mh"/></g>`,
		"fallback": "glyphs:images-1-bold",
	});
}

export default Component;
