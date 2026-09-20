import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/dwqta87zm.css';
import '../../css/w/wx6aefbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="dwqta87zm"/><path class="wx6aefbne"/></g>`,
		"fallback": "keyline-icons:calculator-sharp",
	});
}

export default Component;
