import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wcuslk_yu.css';
import '../../css/w/w4p9snb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wcuslk_yu"/><path class="w4p9snb0b"/></g>`,
		"fallback": "reicon:arrows-right-filled",
	});
}

export default Component;
