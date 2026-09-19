import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aux03ackg.css';
import '../../css/m/mdhb-3syl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="aux03ackg"/><path class="mdhb-3syl"/></g>`,
		"fallback": "glyphs:highlighter-bold",
	});
}

export default Component;
