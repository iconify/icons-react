import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk1kbxbus.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk1kbxbus"/>`,
		"fallback": "energy-icons:activity-48",
	});
}

export default Component;
