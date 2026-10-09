import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5slb8bxt.css';
import '../../css/l/lukcxwqgj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5slb8bxt"/><path class="lukcxwqgj"/>`,
		"fallback": "energy-icons:crop-48-bold",
	});
}

export default Component;
