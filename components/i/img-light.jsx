import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q1kfdbb0u.css';
import '../../css/j/j64j-ho2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="q1kfdbb0u"/><path class="j64j-ho2j"/></g>`,
		"fallback": "lets-icons:img-light",
	});
}

export default Component;
