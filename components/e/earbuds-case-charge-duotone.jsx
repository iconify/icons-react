import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qu601wcxf.css';
import '../../css/w/wliix80om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qu601wcxf"/><path class="wliix80om"/></g>`,
		"fallback": "reicon:earbuds-case-charge-duotone",
	});
}

export default Component;
