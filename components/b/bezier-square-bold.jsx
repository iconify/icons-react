import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nxqdjxbxw.css';
import '../../css/w/w6ffmbb_t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nxqdjxbxw"/><path class="w6ffmbb_t"/></g>`,
		"fallback": "glyphs:bezier-square-bold",
	});
}

export default Component;
