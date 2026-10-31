import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nd_sn0bvq.css';
import '../../css/a/aef6mxlsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nd_sn0bvq"/><path class="aef6mxlsd"/></g>`,
		"fallback": "coolicons:cupcake-duotone-round",
	});
}

export default Component;
