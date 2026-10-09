import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/r/rh0s4zknt.css';
import '../../css/r/r65dv9mgz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="rh0s4zknt"/><path class="r65dv9mgz"/>`,
		"fallback": "energy-icons:carbon-credit-20-bold",
	});
}

export default Component;
