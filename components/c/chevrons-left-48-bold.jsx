import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka0ey-ttx.css';
import '../../css/u/uclife8yb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka0ey-ttx"/><path class="uclife8yb"/>`,
		"fallback": "energy-icons:chevrons-left-48-bold",
	});
}

export default Component;
