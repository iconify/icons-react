import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hhpuz9bck.css';
import '../../css/a/a0s4n_b3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hhpuz9bck"/><path class="a0s4n_b3v"/></g>`,
		"fallback": "coolicons:flask-duotone-round",
	});
}

export default Component;
