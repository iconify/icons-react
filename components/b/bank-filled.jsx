import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/br0ic1bqd.css';
import '../../css/g/g3wrocfbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="br0ic1bqd"/><path class="g3wrocfbz"/></g>`,
		"fallback": "reicon:bank-filled",
	});
}

export default Component;
