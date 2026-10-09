import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkx8hebbl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkx8hebbl"/>`,
		"fallback": "energy-icons:code-2-20-bold",
	});
}

export default Component;
