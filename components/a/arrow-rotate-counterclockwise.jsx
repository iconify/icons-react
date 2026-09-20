import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kyi3qkb2c.css';
import '../../css/v/vn25--btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kyi3qkb2c"/><path class="vn25--btm"/></g>`,
		"fallback": "proicons:arrow-rotate-counterclockwise",
	});
}

export default Component;
