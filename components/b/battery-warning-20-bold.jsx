import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q07t0ebtb.css';
import '../../css/s/sjt-1kaax.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q07t0ebtb"/><path class="sjt-1kaax"/>`,
		"fallback": "energy-icons:battery-warning-20-bold",
	});
}

export default Component;
