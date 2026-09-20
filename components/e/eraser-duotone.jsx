import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/byt93-chv.css';
import '../../css/o/otd181h6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="byt93-chv"/><path class="otd181h6h"/></g>`,
		"fallback": "keyline-icons:eraser-duotone",
	});
}

export default Component;
