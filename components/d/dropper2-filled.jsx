import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fej3jhoxo.css';
import '../../css/j/jaikm7buw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fej3jhoxo"/><path clip-rule="evenodd" class="jaikm7buw"/></g>`,
		"fallback": "reicon:dropper2-filled",
	});
}

export default Component;
