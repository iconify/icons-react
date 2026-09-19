import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4rrwcbbw.css';
import '../../css/b/bh86fkbwl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u4rrwcbbw"/><path class="bh86fkbwl"/></g>`,
		"fallback": "glyphs:folder-1-bold",
	});
}

export default Component;
