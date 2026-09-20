import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ru7hcdlyw.css';
import '../../css/k/kwlyi4b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ru7hcdlyw"/><path class="kwlyi4b3f"/></g>`,
		"fallback": "pixelarticons:a-arrow-down-sharp",
	});
}

export default Component;
