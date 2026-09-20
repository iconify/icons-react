import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj0k1_ban.css';
import '../../css/u/uwnailbic.css';
import '../../css/a/ab7e5tb5k.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/w4vkojbmr.css';
import '../../css/j/j6_gv1bjd.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="lj0k1_ban"><path class="uwnailbic"/><path class="ab7e5tb5k"/></g><g class="jn8qy4bru"><path class="w4vkojbmr"/><path class="j6_gv1bjd"/></g>`,
		"fallback": "openmoji:banana",
	});
}

export default Component;
