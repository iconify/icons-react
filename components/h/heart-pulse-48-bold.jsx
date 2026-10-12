import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-uudvbgh.css';
import '../../css/r/rzfy3_b5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-uudvbgh"/><path class="rzfy3_b5p"/>`,
		"fallback": "energy-icons:heart-pulse-48-bold",
	});
}

export default Component;
