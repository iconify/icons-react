import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9hp2_byx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9hp2_byx"/>`,
		"fallback": "energy-icons:equal-48-bold",
	});
}

export default Component;
