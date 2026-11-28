import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y23e8mb9a.css';
import '../../css/r/rofecty0h.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y23e8mb9a"/><path class="rofecty0h"/></g>`,
		"fallback": "pullo:border-bottom-duotone",
	});
}

export default Component;
