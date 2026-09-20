import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmy1zbc9u.css';
import '../../css/g/grrgpsb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nmy1zbc9u"/><path class="grrgpsb3t"/></g>`,
		"fallback": "solar:chef-hat-heart-bold",
	});
}

export default Component;
