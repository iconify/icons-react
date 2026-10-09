import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9_on4g5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9_on4g5x"/>`,
		"fallback": "energy-icons:activity-48-bold",
	});
}

export default Component;
