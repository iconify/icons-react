import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e_0-8sb7n.css';
import '../../css/l/lqbdq70dr.css';
import '../../css/s/sorxzqbxa.css';
import '../../css/p/pkcbadncp.css';
import '../../css/y/ylzw76k-v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e_0-8sb7n"/><path class="lqbdq70dr"/><path class="sorxzqbxa"/><path class="pkcbadncp"/><path class="ylzw76k-v"/></g>`,
		"fallback": "fluent-emoji-high-contrast:astronaut",
	});
}

export default Component;
