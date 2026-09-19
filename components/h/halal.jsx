import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/neydl-b0h.css';
import '../../css/r/rwv7d3bso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="neydl-b0h"/><path class="rwv7d3bso"/></g>`,
		"fallback": "hugeicons:halal",
	});
}

export default Component;
