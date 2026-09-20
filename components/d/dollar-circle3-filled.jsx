import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txu5a_3fa.css';
import '../../css/n/nd3oembfa.css';
import '../../css/d/d4sgmebde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="txu5a_3fa"/><path class="nd3oembfa"/><path class="d4sgmebde"/></g>`,
		"fallback": "reicon:dollar-circle3-filled",
	});
}

export default Component;
