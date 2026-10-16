import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxz-0ibrd.css';
import '../../css/a/aycw-jbph.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxz-0ibrd"/><path class="aycw-jbph"/><path class="jeyqzjnhx"/>`,
		"fallback": "energy-icons:home-battery-alert-20-bold",
	});
}

export default Component;
