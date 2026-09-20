import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hu3wih6ls.css';
import '../../css/f/fw-vshkfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hu3wih6ls"/><path class="fw-vshkfs"/></g>`,
		"fallback": "reicon:doc2-duotone",
	});
}

export default Component;
