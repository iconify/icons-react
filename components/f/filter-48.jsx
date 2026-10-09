import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkwqbs4aq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkwqbs4aq"/>`,
		"fallback": "energy-icons:filter-48",
	});
}

export default Component;
