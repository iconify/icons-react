import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayaqdo9ve.css';
import '../../css/z/za5ig0byw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ayaqdo9ve"/><path class="za5ig0byw"/></g>`,
		"fallback": "pepicons-pencil:headphone",
	});
}

export default Component;
