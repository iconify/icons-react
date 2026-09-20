import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yh3btko3l.css';
import '../../css/d/dgy411bol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yh3btko3l"/><path clip-rule="evenodd" class="dgy411bol"/></g>`,
		"fallback": "keyline-icons:bed-single-sharp-duotone",
	});
}

export default Component;
