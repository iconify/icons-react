import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djaom8a_q.css';
import '../../css/u/u8d4vrbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djaom8a_q"/><path class="u8d4vrbql"/></g>`,
		"fallback": "iconamoon:dislike",
	});
}

export default Component;
