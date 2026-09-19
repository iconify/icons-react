import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w3unpp2as.css';
import '../../css/g/gprh9tb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w3unpp2as"/><path clip-rule="evenodd" class="gprh9tb0x"/></g>`,
		"fallback": "healthicons:blood-drop-outline-24px",
	});
}

export default Component;
