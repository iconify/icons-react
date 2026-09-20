import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xa4h_mb4r.css';
import '../../css/j/jjw88sbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xa4h_mb4r"/><path class="jjw88sbws"/></g>`,
		"fallback": "reicon:chart6-filled",
	});
}

export default Component;
