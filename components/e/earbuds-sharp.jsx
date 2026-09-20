import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rau-pebxg.css';
import '../../css/j/jkh-81bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rau-pebxg"/><path class="jkh-81bok"/></g>`,
		"fallback": "keyline-icons:earbuds-sharp",
	});
}

export default Component;
