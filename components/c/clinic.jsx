import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/usj0y3wgj.css';
import '../../css/p/pql_gnblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="usj0y3wgj"/><path class="pql_gnblg"/></g>`,
		"fallback": "hugeicons:clinic",
	});
}

export default Component;
