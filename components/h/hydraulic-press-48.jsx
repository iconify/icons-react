import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce0984b4t.css';
import '../../css/t/tetsfk0bz.css';
import '../../css/w/wl07m1b3t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce0984b4t"/><path class="tetsfk0bz"/><path class="wl07m1b3t"/>`,
		"fallback": "energy-icons:hydraulic-press-48",
	});
}

export default Component;
