import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-khqclun.css';
import '../../css/e/e6u7bf88s.css';
import '../../css/f/f020qv8gp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-khqclun"/><path class="e6u7bf88s"/><path class="f020qv8gp"/>`,
		"fallback": "energy-icons:cnc-machine-20",
	});
}

export default Component;
