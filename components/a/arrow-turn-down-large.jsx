import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z3zqi1lzk.css';
import '../../css/b/brsl2mb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z3zqi1lzk"/><path class="brsl2mb1u"/></g>`,
		"fallback": "streamline-sharp:arrow-turn-down-large",
	});
}

export default Component;
