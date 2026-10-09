import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwy0au9lc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwy0au9lc"/>`,
		"fallback": "energy-icons:cloud-moon-48-bold",
	});
}

export default Component;
