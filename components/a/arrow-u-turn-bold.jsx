import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f8bnvkbmw.css';
import '../../css/k/kdbkwob-m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f8bnvkbmw"/><path class="kdbkwob-m"/></g>`,
		"fallback": "glyphs:arrow-u-turn-bold",
	});
}

export default Component;
