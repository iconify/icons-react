import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c16gnnoln.css';
import '../../css/d/dm4nqk5ay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c16gnnoln"/><path class="dm4nqk5ay wm-s"/></g>`,
		"fallback": "withicons:heater-solid",
	});
}

export default Component;
