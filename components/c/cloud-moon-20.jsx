import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe3d6k5kz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe3d6k5kz"/>`,
		"fallback": "energy-icons:cloud-moon-20",
	});
}

export default Component;
