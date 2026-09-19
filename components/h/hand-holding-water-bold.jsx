import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6q4gcbus.css';
import '../../css/w/w2hs0thng.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z6q4gcbus"/><path class="w2hs0thng"/></g>`,
		"fallback": "glyphs:hand-holding-water-bold",
	});
}

export default Component;
