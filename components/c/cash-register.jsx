import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qlkgjzbfl.css';
import '../../css/g/ghy1agb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qlkgjzbfl"/><path class="ghy1agb1b wm-a"/></g>`,
		"fallback": "withicons:cash-register",
	});
}

export default Component;
