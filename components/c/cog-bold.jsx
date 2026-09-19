import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/az3n0co6x.css';
import '../../css/l/l3v288bbs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="az3n0co6x"/><path class="l3v288bbs"/></g>`,
		"fallback": "glyphs:cog-bold",
	});
}

export default Component;
