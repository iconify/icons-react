import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms6ew-l8q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms6ew-l8q"/>`,
		"fallback": "energy-icons:arrow-big-up-48",
	});
}

export default Component;
