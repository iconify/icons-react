import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bk7byacbp.css';
import '../../css/w/wntpr81_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bk7byacbp"/><path class="wntpr81_j"/></g>`,
		"fallback": "keyline-icons:eraser-sharp-duotone",
	});
}

export default Component;
