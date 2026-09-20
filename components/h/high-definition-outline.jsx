import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2gxr5bwv.css';
import '../../css/l/l8jkf64ne.css';
import '../../css/b/bbrv0_ogo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f2gxr5bwv"/><path clip-rule="evenodd" class="l8jkf64ne"/><path clip-rule="evenodd" class="bbrv0_ogo"/></g>`,
		"fallback": "solar:high-definition-outline",
	});
}

export default Component;
