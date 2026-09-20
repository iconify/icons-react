import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e1i41d6ns.css';
import '../../css/w/w7b836rrt.css';
import '../../css/o/omhztw0yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="e1i41d6ns"/><path class="w7b836rrt"/><path class="omhztw0yy"/></g>`,
		"fallback": "streamline-ultimate:hair-dress-round-brush-1",
	});
}

export default Component;
