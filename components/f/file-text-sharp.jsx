import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zi49d094y.css';
import '../../css/c/cw70li2iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zi49d094y"/><path class="cw70li2iz"/></g>`,
		"fallback": "pixelarticons:file-text-sharp",
	});
}

export default Component;
