import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2_zy01_l.css';
import '../../css/u/uvhzmp04b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2_zy01_l"/><path class="uvhzmp04b"/>`,
		"fallback": "energy-icons:electric-bus-20",
	});
}

export default Component;
