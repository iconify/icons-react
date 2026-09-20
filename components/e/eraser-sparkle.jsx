import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sstk95b_c.css';
import '../../css/r/rw3bxabhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sstk95b_c"/><path class="rw3bxabhh"/></g>`,
		"fallback": "proicons:eraser-sparkle",
	});
}

export default Component;
