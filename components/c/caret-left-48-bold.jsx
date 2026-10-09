import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py4tycbud.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py4tycbud"/>`,
		"fallback": "energy-icons:caret-left-48-bold",
	});
}

export default Component;
