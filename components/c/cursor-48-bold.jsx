import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e84_f2b0w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e84_f2b0w"/>`,
		"fallback": "energy-icons:cursor-48-bold",
	});
}

export default Component;
