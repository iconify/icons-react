import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jr1en1rjd.css';
import '../../css/z/z4fuuk-gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jr1en1rjd"/><path class="z4fuuk-gw"/></g>`,
		"fallback": "mynaui:image-solid",
	});
}

export default Component;
