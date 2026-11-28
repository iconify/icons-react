import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x2q63xbjt.css';
import '../../css/z/zkbhu1p7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary x2q63xbjt"/><path class="primary zkbhu1p7e"/></g>`,
		"fallback": "iconaut:haze-duotone",
	});
}

export default Component;
