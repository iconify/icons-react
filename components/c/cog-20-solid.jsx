import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-q2ulbjv.css';
import '../../css/a/a74rgv56y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j-q2ulbjv"/><path clip-rule="evenodd" class="a74rgv56y"/></g>`,
		"fallback": "heroicons:cog-20-solid",
	});
}

export default Component;
