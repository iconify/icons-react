import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4vli7ncu.css';
import '../../css/i/i66lmo-ym.css';
import '../../css/z/z_g0_6bob.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4vli7ncu"/><path class="i66lmo-ym"/><path class="z_g0_6bob"/>`,
		"fallback": "energy-icons:grant-48-bold",
	});
}

export default Component;
