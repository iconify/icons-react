import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clbojs-7u.css';
import '../../css/d/d1s8_8v5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="clbojs-7u"/><path class="d1s8_8v5q"/></g>`,
		"fallback": "coolicons:hand-grab-duotone-round",
	});
}

export default Component;
