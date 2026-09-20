import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y7gflrujy.css';
import '../../css/w/wc6pz9b2n.css';
import '../../css/w/w-ie4ibys.css';
import '../../css/k/kznzuji5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y7gflrujy"/><path class="wc6pz9b2n"/><path class="w-ie4ibys"/><path clip-rule="evenodd" class="kznzuji5s"/></g>`,
		"fallback": "solar:facemask-circle-bold",
	});
}

export default Component;
