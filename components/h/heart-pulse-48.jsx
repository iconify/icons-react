import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvnfjofcq.css';
import '../../css/e/e2jvog8gd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvnfjofcq"/><path class="e2jvog8gd"/>`,
		"fallback": "energy-icons:heart-pulse-48",
	});
}

export default Component;
