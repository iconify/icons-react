import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glxb9obxa.css';
import '../../css/y/yq7ps8ebr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glxb9obxa"/><path class="yq7ps8ebr"/>`,
		"fallback": "energy-icons:arrow-down-right-48-bold",
	});
}

export default Component;
