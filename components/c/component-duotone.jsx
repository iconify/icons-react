import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxn6_hboa.css';
import '../../css/e/ey47xjb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uxn6_hboa"/><path class="ey47xjb8r"/></g>`,
		"fallback": "lucide-extended:component-duotone",
	});
}

export default Component;
