import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su5nz9bnp.css';
import '../../css/c/c-q5u1bet.css';
import '../../css/w/w6bhw7baw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su5nz9bnp"/><path class="c-q5u1bet"/><path class="w6bhw7baw"/>`,
		"fallback": "energy-icons:green-hydrogen-48",
	});
}

export default Component;
