import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9uxtdtin.css';
import '../../css/p/p3s2lwbxe.css';
import '../../css/m/mo3iz1pxq.css';
import '../../css/c/czpsoimrb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v9uxtdtin"/><path class="p3s2lwbxe"/><path class="mo3iz1pxq"/><path class="czpsoimrb"/></g>`,
		"fallback": "pepicons-pencil:angle-down",
	});
}

export default Component;
