import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geb7k3hdy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geb7k3hdy"/>`,
		"fallback": "energy-icons:energy-rating-20",
	});
}

export default Component;
