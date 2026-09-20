import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ym_vracyb.css';
import '../../css/m/myul4-b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ym_vracyb"/><path class="myul4-b4i"/></g>`,
		"fallback": "solar:double-alt-arrow-right-bold",
	});
}

export default Component;
