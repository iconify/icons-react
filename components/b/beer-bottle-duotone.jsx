import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xuvvgyq3y.css';
import '../../css/l/l24de2szl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xuvvgyq3y"/><path class="l24de2szl primary"/></g>`,
		"fallback": "iconaut:beer-bottle-duotone",
	});
}

export default Component;
