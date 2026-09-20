import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f427lpb1w.css';
import '../../css/s/sswn5w2za.css';
import '../../css/x/x0csbt6wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f427lpb1w"/><path class="sswn5w2za"/><path class="x0csbt6wm"/></g>`,
		"fallback": "proicons:headphones-off",
	});
}

export default Component;
