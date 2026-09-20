import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/womc13box.css';
import '../../css/x/xe2-c2r3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="womc13box"/><path class="xe2-c2r3e"/></g>`,
		"fallback": "reicon:dropper2-duotone",
	});
}

export default Component;
