import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxkl-8bti.css';
import '../../css/g/g2tih8iko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxkl-8bti"/><path class="g2tih8iko"/></g>`,
		"fallback": "lucide-extended:carets-to-axis-horizontal-duotone",
	});
}

export default Component;
