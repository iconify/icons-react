import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h29k4od9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h29k4od9d"/>`,
		"fallback": "game-icons:farm-tractor",
	});
}

export default Component;
