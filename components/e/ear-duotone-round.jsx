import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/be48nj1pv.css';
import '../../css/x/xk0yj8bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="be48nj1pv"/><path class="xk0yj8bdb"/></g>`,
		"fallback": "coolicons:ear-duotone-round",
	});
}

export default Component;
