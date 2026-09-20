import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/urtcbkbgx.css';
import '../../css/h/h927fhiqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="urtcbkbgx"/><path class="h927fhiqa"/></g>`,
		"fallback": "reicon:bookmark-open-filled",
	});
}

export default Component;
