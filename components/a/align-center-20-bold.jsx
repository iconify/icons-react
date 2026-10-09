import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv-71uxns.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qv-71uxns"/>`,
		"fallback": "energy-icons:align-center-20-bold",
	});
}

export default Component;
