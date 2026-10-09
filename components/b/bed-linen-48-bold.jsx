import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe70pmbug.css';
import '../../css/a/aordspgcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe70pmbug"/><path class="aordspgcp"/>`,
		"fallback": "energy-icons:bed-linen-48-bold",
	});
}

export default Component;
