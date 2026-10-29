import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qz-3_0bjm.css';
import '../../css/z/z0orz_bkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qz-3_0bjm"/><path class="wm-a z0orz_bkb"/></g>`,
		"fallback": "withicons:bird",
	});
}

export default Component;
