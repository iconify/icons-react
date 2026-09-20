import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlil8_b4l.css';
import '../../css/u/u7h7ndb3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hlil8_b4l"/><path clip-rule="evenodd" class="u7h7ndb3e"/></g>`,
		"fallback": "solar:hiking-bold",
	});
}

export default Component;
