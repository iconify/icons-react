import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/ztugpvbjt.css';
import '../../css/v/vulylmfzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ztugpvbjt"/><path clip-rule="evenodd" class="vulylmfzh"/></g>`,
		"fallback": "keyline-icons:bottle-duotone",
	});
}

export default Component;
