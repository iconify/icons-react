import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr7h2fb6d.css';
import '../../css/o/ozdoq5bsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lr7h2fb6d"/><path class="ozdoq5bsu"/>`,
		"fallback": "energy-icons:dice-4-48",
	});
}

export default Component;
