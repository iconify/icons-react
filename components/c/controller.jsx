import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/if8c-p6ab.css';
import '../../css/r/r0mx2p4-s.css';
import '../../css/g/gqfbtia_s.css';
import '../../css/j/j7whtobzs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="if8c-p6ab"/><path clip-rule="evenodd" class="r0mx2p4-s"/><path class="gqfbtia_s"/><path class="j7whtobzs"/></g>`,
		"fallback": "pepicons:controller",
	});
}

export default Component;
