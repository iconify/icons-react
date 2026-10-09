import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll4p3cbte.css';
import '../../css/m/m4t5o-y0h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll4p3cbte"/><path class="m4t5o-y0h"/>`,
		"fallback": "energy-icons:e-fuel-20-bold",
	});
}

export default Component;
