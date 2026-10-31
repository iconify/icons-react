import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b48f0ccsu.css';
import '../../css/x/x-g0wab5m.css';
import '../../css/h/h7g538bxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="b48f0ccsu wm-shadow"/><path class="wm-shadow x-g0wab5m"/><path class="h7g538bxc"/></g>`,
		"fallback": "withicons-brutal:align-center",
	});
}

export default Component;
