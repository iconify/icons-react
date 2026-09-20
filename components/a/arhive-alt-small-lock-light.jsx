import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tvwa76lwl.css';
import '../../css/r/r0l3wbbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="tvwa76lwl"/><path class="r0l3wbbwq"/></g>`,
		"fallback": "lets-icons:arhive-alt-small-lock-light",
	});
}

export default Component;
