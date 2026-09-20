import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qb0mpzqzh.css';
import '../../css/b/bz3zm7j7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qb0mpzqzh"/><path class="bz3zm7j7m"/></g>`,
		"fallback": "streamline-freehand-color:airplane-mode-rectangle",
	});
}

export default Component;
