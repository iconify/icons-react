import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/clwivwvku.css';
import '../../css/w/w09xprbay.css';
import '../../css/w/wtll6dz5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="clwivwvku"/><path class="w09xprbay wm-a"/><path class="wm-a wtll6dz5m"/></g>`,
		"fallback": "withicons:certificate",
	});
}

export default Component;
