import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hv9q248vg.css';
import '../../css/l/l7rn5kbuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hv9q248vg"/><path class="l7rn5kbuc"/></g>`,
		"fallback": "reicon:floppy-duotone",
	});
}

export default Component;
