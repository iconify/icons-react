import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsg5j7ibl.css';
import '../../css/i/ipx9j1bxd.css';
import '../../css/k/k1e0ppbav.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsg5j7ibl"/><path class="ipx9j1bxd"/><path class="k1e0ppbav"/>`,
		"fallback": "famicons:alert-circle-outline",
	});
}

export default Component;
