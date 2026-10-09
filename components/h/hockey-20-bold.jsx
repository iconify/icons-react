import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejrj45bop.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejrj45bop"/>`,
		"fallback": "energy-icons:hockey-20-bold",
	});
}

export default Component;
