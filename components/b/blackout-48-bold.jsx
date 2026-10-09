import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_okms-zf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_okms-zf"/>`,
		"fallback": "energy-icons:blackout-48-bold",
	});
}

export default Component;
