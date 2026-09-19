import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cgfkk6d2f.css';
import '../../css/l/lvh0zsbby.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cgfkk6d2f"/><path class="lvh0zsbby"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-without-mouth",
	});
}

export default Component;
