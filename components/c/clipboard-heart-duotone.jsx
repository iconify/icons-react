import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f054vmoxe.css';
import '../../css/f/fd2a7bcwb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f054vmoxe"/><path class="fd2a7bcwb"/></g>`,
		"fallback": "reicon:clipboard-heart-duotone",
	});
}

export default Component;
