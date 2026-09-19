import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl54b9bcm.css';
import '../../css/h/h45xcdbkg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl54b9bcm"/><path class="h45xcdbkg"/>`,
		"fallback": "cil:calendar-check",
	});
}

export default Component;
