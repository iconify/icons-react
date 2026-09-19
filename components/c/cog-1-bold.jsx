import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-ey2acxb.css';
import '../../css/x/xrso-e0og.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w-ey2acxb"/><path class="xrso-e0og"/></g>`,
		"fallback": "glyphs:cog-1-bold",
	});
}

export default Component;
