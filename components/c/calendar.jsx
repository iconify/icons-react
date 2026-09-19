import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl54b9bcm.css';
import '../../css/o/oy01ueb7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl54b9bcm"/><path class="oy01ueb7k"/>`,
		"fallback": "cil:calendar",
	});
}

export default Component;
