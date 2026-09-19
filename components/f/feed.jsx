import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xc8q9jb2l.css';
import '../../css/v/vyncxjice.css';
import '../../css/u/u-ekc0a9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xc8q9jb2l"/><path class="vyncxjice"/><path class="u-ekc0a9z"/></g>`,
		"fallback": "gg:feed",
	});
}

export default Component;
