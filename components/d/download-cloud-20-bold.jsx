import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4q0sxn6x.css';
import '../../css/p/p-3dudb8i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4q0sxn6x"/><path class="p-3dudb8i"/>`,
		"fallback": "energy-icons:download-cloud-20-bold",
	});
}

export default Component;
