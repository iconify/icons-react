import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxz4cubom.css';
import '../../css/i/iv8yz13mj.css';
import '../../css/l/lv8uq9bgl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxz4cubom"/><path class="iv8yz13mj"/><path class="lv8uq9bgl"/>`,
		"fallback": "energy-icons:chicken-leg-20-bold",
	});
}

export default Component;
