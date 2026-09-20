import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y75la1msn.css';
import '../../css/k/kmws4zb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y75la1msn"/><path class="kmws4zb7i"/></g>`,
		"fallback": "reicon:airpods-filled",
	});
}

export default Component;
