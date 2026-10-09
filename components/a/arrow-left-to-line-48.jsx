import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdyaxkb1l.css';
import '../../css/e/e3qz-bbmc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdyaxkb1l"/><path class="e3qz-bbmc"/>`,
		"fallback": "energy-icons:arrow-left-to-line-48",
	});
}

export default Component;
