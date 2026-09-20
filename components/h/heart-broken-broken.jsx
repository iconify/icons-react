import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4s0jilcu.css';
import '../../css/d/d31n_8srb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a4s0jilcu"/><path class="d31n_8srb"/></g>`,
		"fallback": "solar:heart-broken-broken",
	});
}

export default Component;
