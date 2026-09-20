import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/minr5gc1v.css';
import '../../css/v/v18-fiblr.css';
import '../../css/v/vr5t-cbds.css';
import '../../css/v/v50u05_ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="minr5gc1v"/><path class="v18-fiblr"/><path class="vr5t-cbds"/><path class="v50u05_ah"/></g>`,
		"fallback": "solar:grid-2x2-add-bold",
	});
}

export default Component;
