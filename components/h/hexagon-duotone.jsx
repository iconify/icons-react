import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u1coyrgub.css';
import '../../css/h/hprx46b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u1coyrgub"/><path class="hprx46b4s"/></g>`,
		"fallback": "lucide-extended:hexagon-duotone",
	});
}

export default Component;
