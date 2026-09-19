import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ikywobb2t.css';
import '../../css/e/etf2gybil.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ikywobb2t"/><path class="etf2gybil"/></g>`,
		"fallback": "glyphs:directions-sign-1-outline",
	});
}

export default Component;
