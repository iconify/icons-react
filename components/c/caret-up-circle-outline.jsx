import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5kdt5bwm.css';
import '../../css/l/lsg5j7ibl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5kdt5bwm"/><path class="lsg5j7ibl"/>`,
		"fallback": "ion:caret-up-circle-outline",
	});
}

export default Component;
