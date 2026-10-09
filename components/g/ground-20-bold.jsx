import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0ezl7eqf.css';
import '../../css/m/mgkn3accm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0ezl7eqf"/><path class="mgkn3accm"/>`,
		"fallback": "energy-icons:ground-20-bold",
	});
}

export default Component;
