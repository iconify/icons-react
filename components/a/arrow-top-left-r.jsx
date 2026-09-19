import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sipsk8bsr.css';
import '../../css/c/cl59tee5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sipsk8bsr"/><path clip-rule="evenodd" class="cl59tee5q"/></g>`,
		"fallback": "gg:arrow-top-left-r",
	});
}

export default Component;
