import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_320w4ee.css';
import '../../css/e/ec0kd2kjb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_320w4ee"/><path class="ec0kd2kjb"/>`,
		"fallback": "energy-icons:align-top-20-bold",
	});
}

export default Component;
