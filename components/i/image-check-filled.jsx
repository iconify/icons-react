import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xzbraw0um.css';
import '../../css/a/anjbf5xdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xzbraw0um"/><path class="anjbf5xdz"/></g>`,
		"fallback": "reicon:image-check-filled",
	});
}

export default Component;
