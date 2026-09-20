import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kw9ftvjzn.css';
import '../../css/j/j97b3zb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="kw9ftvjzn"/><path class="j97b3zb8d"/></g>`,
		"fallback": "streamline-freehand-color:collaboration-meeting-team-file",
	});
}

export default Component;
