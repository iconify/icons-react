import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cgha4ub1e.css';
import '../../css/g/gvn8w8b2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cgha4ub1e"/><path class="gvn8w8b2n"/></g>`,
		"fallback": "coolicons:hexagon-minus-duotone-round",
	});
}

export default Component;
