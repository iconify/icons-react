import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgbxvebvj.css';
import '../../css/t/tipy9tb0h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgbxvebvj"/><path class="tipy9tb0h"/>`,
		"fallback": "energy-icons:electric-boiler-20-bold",
	});
}

export default Component;
