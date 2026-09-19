import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ftn8cqbqg.css';
import '../../css/y/y2s1cfdcj.css';
import '../../css/q/qx1sll5xe.css';
import '../../css/s/ste38-bxc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ftn8cqbqg"/><path class="y2s1cfdcj"/><path class="qx1sll5xe"/><path class="ste38-bxc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hibiscus",
	});
}

export default Component;
