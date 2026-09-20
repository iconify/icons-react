import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yk2u5bcci.css';
import '../../css/f/f-xz-wbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yk2u5bcci"/><path class="f-xz-wbqg"/></g>`,
		"fallback": "mynaui:bike-solid",
	});
}

export default Component;
