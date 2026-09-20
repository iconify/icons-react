import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/inxncrbvs.css';
import '../../css/l/l5j62yb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="inxncrbvs"/><path class="l5j62yb7v"/></g>`,
		"fallback": "reicon:bill-x-duotone",
	});
}

export default Component;
