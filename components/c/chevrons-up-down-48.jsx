import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw67kyv5m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw67kyv5m"/>`,
		"fallback": "energy-icons:chevrons-up-down-48",
	});
}

export default Component;
