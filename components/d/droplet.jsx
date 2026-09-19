import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i3wey7bro.css';
import '../../css/c/c95l2557y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i3wey7bro"/><path class="c95l2557y"/></g>`,
		"fallback": "hugeicons:droplet",
	});
}

export default Component;
