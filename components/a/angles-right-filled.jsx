import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f67z3fbbs.css';
import '../../css/f/frgy6wlqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f67z3fbbs"/><path class="frgy6wlqf"/></g>`,
		"fallback": "reicon:angles-right-filled",
	});
}

export default Component;
