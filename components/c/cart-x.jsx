import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t4_ziwztn.css';
import '../../css/u/ujup6jmjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t4_ziwztn"/><path clip-rule="evenodd" class="ujup6jmjt"/></g>`,
		"fallback": "reicon:cart-x",
	});
}

export default Component;
