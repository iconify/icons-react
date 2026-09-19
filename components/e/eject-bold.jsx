import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fv6v78bkd.css';
import '../../css/w/w8_g_240j.css';
import '../../css/g/guod_qb3z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fv6v78bkd"/><path class="w8_g_240j"/><path class="guod_qb3z"/></g>`,
		"fallback": "glyphs:eject-bold",
	});
}

export default Component;
