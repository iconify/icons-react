import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/euz5h5hcx.css';
import '../../css/y/y-8uw-nze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="euz5h5hcx"/><path clip-rule="evenodd" class="y-8uw-nze"/></g>`,
		"fallback": "reicon:arrow-up-left-square",
	});
}

export default Component;
