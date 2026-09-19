import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/ds497pb7g.css';
import '../../css/i/iuk328b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ds497pb7g"/><path class="iuk328b3x"/></g>`,
		"fallback": "hugeicons:closed-caption-alt",
	});
}

export default Component;
