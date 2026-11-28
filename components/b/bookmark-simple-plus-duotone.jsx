import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t2xev-7mr.css';
import '../../css/m/mxtv4j9mf.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t2xev-7mr"/><path class="mxtv4j9mf"/></g>`,
		"fallback": "pullo:bookmark-simple-plus-duotone",
	});
}

export default Component;
