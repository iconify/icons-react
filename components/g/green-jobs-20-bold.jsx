import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh0-6objo.css';
import '../../css/u/u5hzo-bsp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh0-6objo"/><path class="u5hzo-bsp"/>`,
		"fallback": "energy-icons:green-jobs-20-bold",
	});
}

export default Component;
