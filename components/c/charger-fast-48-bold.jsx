import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbi78gooe.css';
import '../../css/g/guzya4pfz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbi78gooe"/><path class="guzya4pfz"/>`,
		"fallback": "energy-icons:charger-fast-48-bold",
	});
}

export default Component;
