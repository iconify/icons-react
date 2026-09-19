import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufdwcf-0b.css';
import '../../css/b/bekxl5b0t.css';
import '../../css/h/hi120-b8l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ufdwcf-0b"/><path clip-rule="evenodd" class="bekxl5b0t"/><path class="hi120-b8l"/></g>`,
		"fallback": "pepicons:bell-off",
	});
}

export default Component;
