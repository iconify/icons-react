import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lu8op0baq.css';
import '../../css/g/ggvmewjvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lu8op0baq"/><path class="ggvmewjvl"/></g>`,
		"fallback": "pixelarticons:bell-sharp",
	});
}

export default Component;
