import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cw00d0b0d.css';
import '../../css/d/dlr0hvbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cw00d0b0d"/><path clip-rule="evenodd" class="dlr0hvbyl"/></g>`,
		"fallback": "gg:captions",
	});
}

export default Component;
