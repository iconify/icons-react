import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ekfeu_b7w.css';
import '../../css/v/vzgygcepj.css';
import '../../css/j/jwj5s6brs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ekfeu_b7w"/><path class="vzgygcepj"/><path class="jwj5s6brs"/></g>`,
		"fallback": "solar:danger-square-bold-duotone",
	});
}

export default Component;
