import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y3u832j3b.css';
import '../../css/t/t71w2db2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y3u832j3b"/><path clip-rule="evenodd" class="t71w2db2c"/></g>`,
		"fallback": "keyline-icons:bed-single-duotone",
	});
}

export default Component;
