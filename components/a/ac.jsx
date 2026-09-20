import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o9mox1-xv.css';
import '../../css/x/xj1nhm_zh.css';
import '../../css/i/i1cj2t61h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o9mox1-xv"/><path clip-rule="evenodd" class="xj1nhm_zh"/><path class="i1cj2t61h"/></g>`,
		"fallback": "reicon:ac",
	});
}

export default Component;
