import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xiicuyp0z.css';
import '../../css/o/ohm-el9zo.css';
import '../../css/u/uycqi9b6u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xiicuyp0z"/><path class="ohm-el9zo"/><path class="uycqi9b6u"/></g>`,
		"fallback": "glyphs:copy-1-bold",
	});
}

export default Component;
