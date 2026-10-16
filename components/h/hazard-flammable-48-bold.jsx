import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2mjsubix.css';
import '../../css/u/ub9hmvbkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2mjsubix"/><path class="ub9hmvbkh"/>`,
		"fallback": "energy-icons:hazard-flammable-48-bold",
	});
}

export default Component;
