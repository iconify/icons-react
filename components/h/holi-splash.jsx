import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ea8z-ybmv.css';
import '../../css/i/ievz6-bgp.css';
import '../../css/k/k6dkddbtm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ea8z-ybmv"/><path class="ievz6-bgp wm-a"/><path class="k6dkddbtm wm-s"/></g>`,
		"fallback": "withicons:holi-splash",
	});
}

export default Component;
