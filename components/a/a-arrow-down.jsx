import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ru7hcdlyw.css';
import '../../css/c/cgrhauf-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ru7hcdlyw"/><path class="cgrhauf-z"/></g>`,
		"fallback": "pixelarticons:a-arrow-down",
	});
}

export default Component;
