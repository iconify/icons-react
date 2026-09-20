import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oks3xobbp.css';
import '../../css/w/wsook6b4e.css';
import '../../css/a/ansc4kbhg.css';
import '../../css/w/wkq9lk8hk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oks3xobbp"/><path class="wsook6b4e"/><path class="ansc4kbhg"/><path class="wkq9lk8hk"/></g>`,
		"fallback": "solar:cosmetic-bold",
	});
}

export default Component;
