import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xwew64s_c.css';
import '../../css/w/whsj6tn6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xwew64s_c"/><path class="whsj6tn6k"/></g>`,
		"fallback": "majesticons:edit-pen-4",
	});
}

export default Component;
