import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4b25kb_a.css';
import '../../css/e/ep5y64b3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4b25kb_a"/><path class="ep5y64b3e"/>`,
		"fallback": "energy-icons:black-start-48-bold",
	});
}

export default Component;
