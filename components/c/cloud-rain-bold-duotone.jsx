import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud3fqxmls.css';
import '../../css/q/q0ro-4hck.css';
import '../../css/c/cr29i4b8c.css';
import '../../css/e/ejx2y1bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ud3fqxmls"/><path class="q0ro-4hck"/><path class="cr29i4b8c"/><path class="ejx2y1bzf"/>`,
		"fallback": "solar:cloud-rain-bold-duotone",
	});
}

export default Component;
