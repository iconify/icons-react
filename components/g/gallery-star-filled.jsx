import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzlu0iy5w.css';
import '../../css/b/bbzv2ob0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jzlu0iy5w"/><path class="bbzv2ob0r"/></g>`,
		"fallback": "reicon:gallery-star-filled",
	});
}

export default Component;
