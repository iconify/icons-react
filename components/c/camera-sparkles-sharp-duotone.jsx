import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/od9q1ob6d.css';
import '../../css/f/flz8mqbuo.css';
import '../../css/u/uuef9bbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="od9q1ob6d"/><path class="flz8mqbuo"/><path class="uuef9bbcj"/></g>`,
		"fallback": "keyline-icons:camera-sparkles-sharp-duotone",
	});
}

export default Component;
