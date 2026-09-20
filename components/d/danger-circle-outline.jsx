import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzgygcepj.css';
import '../../css/j/jwj5s6brs.css';
import '../../css/w/wuvczemwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vzgygcepj"/><path class="jwj5s6brs"/><path clip-rule="evenodd" class="wuvczemwq"/></g>`,
		"fallback": "solar:danger-circle-outline",
	});
}

export default Component;
