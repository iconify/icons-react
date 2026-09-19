import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hwg3gcc-m.css';
import '../../css/z/z1s9mewnl.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGBgS7qSkY)" class="cuyn6tgcc"><path class="hwg3gcc-m"/><path class="z1s9mewnl"/></g><defs><clipPath id="SVGBgS7qSkY"><path class="w49j0rbvv"/></clipPath></defs></g>`,
		"fallback": "ginetex:30c-mild-fine-wash",
	});
}

export default Component;
