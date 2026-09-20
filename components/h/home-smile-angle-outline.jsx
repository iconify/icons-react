import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/us35c2o6n.css';
import '../../css/c/cybrcdc8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="us35c2o6n"/><path clip-rule="evenodd" class="cybrcdc8y"/></g>`,
		"fallback": "solar:home-smile-angle-outline",
	});
}

export default Component;
