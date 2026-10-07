import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rz9cqhx9t.css';
import '../../css/d/d1cvhdcbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rz9cqhx9t"/><path class="d1cvhdcbc"/></g>`,
		"fallback": "wordpress:footer",
	});
}

export default Component;
