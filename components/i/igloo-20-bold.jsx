import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4fxe_2wu.css';
import '../../css/q/qb-anoa-e.css';
import '../../css/f/fxwh4ibmc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4fxe_2wu"/><path class="qb-anoa-e"/><path class="fxwh4ibmc"/>`,
		"fallback": "energy-icons:igloo-20-bold",
	});
}

export default Component;
