import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aivqjwruh.css';
import '../../css/o/oinxi2bcn.css';
import '../../css/k/kp65e56pe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aivqjwruh"/><path class="oinxi2bcn"/><path class="kp65e56pe"/>`,
		"fallback": "energy-icons:compost-48-bold",
	});
}

export default Component;
