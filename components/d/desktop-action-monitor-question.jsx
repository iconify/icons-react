import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/f8hzo4ber.css';
import '../../css/y/y98xg9blh.css';
import '../../css/y/ye_46gv7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="f8hzo4ber"/><path class="y98xg9blh"/><path class="ye_46gv7j"/></g>`,
		"fallback": "streamline-freehand-color:desktop-action-monitor-question",
	});
}

export default Component;
