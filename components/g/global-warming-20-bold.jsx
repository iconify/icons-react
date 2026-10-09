import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0uvzabfw.css';
import '../../css/y/y5duq9b8q.css';
import '../../css/r/rtl9t5b1d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0uvzabfw"/><path class="y5duq9b8q"/><path class="rtl9t5b1d"/>`,
		"fallback": "energy-icons:global-warming-20-bold",
	});
}

export default Component;
