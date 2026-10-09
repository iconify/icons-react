import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izjyqdbgb.css';
import '../../css/g/gqhyy7b6d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izjyqdbgb"/><path class="gqhyy7b6d"/>`,
		"fallback": "energy-icons:home-battery-48-bold",
	});
}

export default Component;
