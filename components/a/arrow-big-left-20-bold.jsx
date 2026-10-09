import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzd3z6cbu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzd3z6cbu"/>`,
		"fallback": "energy-icons:arrow-big-left-20-bold",
	});
}

export default Component;
