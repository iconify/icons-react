import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3onifb8e.css';
import '../../css/n/n9vml882r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3onifb8e"/><path class="n9vml882r"/>`,
		"fallback": "energy-icons:heated-towel-rail-20-bold",
	});
}

export default Component;
