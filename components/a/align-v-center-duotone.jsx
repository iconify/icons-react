import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmx68bcvb.css';
import '../../css/d/d80mrlb0r.css';
import '../../css/i/i82-rac-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nmx68bcvb"/><path class="d80mrlb0r"/><path class="i82-rac-l"/></g>`,
		"fallback": "reicon:align-v-center-duotone",
	});
}

export default Component;
