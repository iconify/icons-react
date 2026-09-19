import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wau4m5pas.css';
import '../../css/q/qj1qzybti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wau4m5pas"/><path class="qj1qzybti"/></g>`,
		"fallback": "iconoir:hospital",
	});
}

export default Component;
