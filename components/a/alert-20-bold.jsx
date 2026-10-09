import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7t31nbyh.css';
import '../../css/m/ma29g-b3a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7t31nbyh"/><path class="ma29g-b3a"/>`,
		"fallback": "energy-icons:alert-20-bold",
	});
}

export default Component;
