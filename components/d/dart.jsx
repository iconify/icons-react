import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z05ebsmne.css';
import '../../css/n/nisslya0g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z05ebsmne"/><path class="nisslya0g"/></g>`,
		"fallback": "devicon-plain:dart",
	});
}

export default Component;
