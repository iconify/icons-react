import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9uxtdtin.css';
import '../../css/p/p3s2lwbxe.css';
import '../../css/m/mo3iz1pxq.css';
import '../../css/y/y-87n76xb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v9uxtdtin"/><path class="p3s2lwbxe"/><path class="mo3iz1pxq"/><path class="y-87n76xb"/></g>`,
		"fallback": "pepicons-pencil:angle-down-off",
	});
}

export default Component;
