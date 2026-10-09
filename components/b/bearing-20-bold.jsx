import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qxllr2mpy.css';
import '../../css/m/m60w9bg_e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qxllr2mpy"/><path class="m60w9bg_e"/>`,
		"fallback": "energy-icons:bearing-20-bold",
	});
}

export default Component;
