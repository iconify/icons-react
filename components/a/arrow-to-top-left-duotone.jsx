import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tk6dg6bqo.css';
import '../../css/y/yhpiu6b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tk6dg6bqo"/><path class="yhpiu6b9v"/></g>`,
		"fallback": "reicon:arrow-to-top-left-duotone",
	});
}

export default Component;
