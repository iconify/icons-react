import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xsknaqxum.css';
import '../../css/d/d9y1ist-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xsknaqxum"/><path class="d9y1ist-v primary"/></g>`,
		"fallback": "iconaut:image-wrap-right-duotone",
	});
}

export default Component;
