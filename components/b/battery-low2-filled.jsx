import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b67otn0sr.css';
import '../../css/h/huq9i0-2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b67otn0sr"/><path class="huq9i0-2s"/></g>`,
		"fallback": "reicon:battery-low2-filled",
	});
}

export default Component;
