import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w0m-g8biv.css';
import '../../css/x/x5664ibis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w0m-g8biv"/><path class="x5664ibis"/></g>`,
		"fallback": "iconoir:cylinder",
	});
}

export default Component;
