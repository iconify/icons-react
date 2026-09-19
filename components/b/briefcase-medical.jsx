import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u2dwg3gay.css';
import '../../css/p/pvjp7gbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u2dwg3gay"/><path class="pvjp7gbus"/></g>`,
		"fallback": "hugeicons:briefcase-medical",
	});
}

export default Component;
