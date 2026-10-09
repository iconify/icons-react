import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6_3zpu9x.css';
import '../../css/p/p6okrgv2f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6_3zpu9x"/><path class="p6okrgv2f"/>`,
		"fallback": "energy-icons:frying-pan-20-bold",
	});
}

export default Component;
