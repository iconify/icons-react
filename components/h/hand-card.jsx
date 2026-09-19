import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nx-_lhbej.css';
import '../../css/v/vwe9oyznd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nx-_lhbej"/><path class="vwe9oyznd"/></g>`,
		"fallback": "iconoir:hand-card",
	});
}

export default Component;
