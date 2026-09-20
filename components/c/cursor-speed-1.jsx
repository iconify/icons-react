import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wk14pgb-m.css';
import '../../css/i/ix2idobnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wk14pgb-m"/><path class="ix2idobnf"/></g>`,
		"fallback": "streamline-freehand-color:cursor-speed-1",
	});
}

export default Component;
