import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eczhb8bku.css';
import '../../css/i/ilr5o7bbz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eczhb8bku"/><rect class="ilr5o7bbz"/></g>`,
		"fallback": "pepicons:flag",
	});
}

export default Component;
