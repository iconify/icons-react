import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u59rpg3aj.css';
import '../../css/v/vazhcubhi.css';
import '../../css/v/v4s2axqse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u59rpg3aj"/><path class="vazhcubhi"/><path clip-rule="evenodd" class="v4s2axqse"/></g>`,
		"fallback": "healthicons:blood-b-n-outline-24px",
	});
}

export default Component;
