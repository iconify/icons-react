import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcllyhbok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcllyhbok"/>`,
		"fallback": "energy-icons:cavity-wall-48-bold",
	});
}

export default Component;
