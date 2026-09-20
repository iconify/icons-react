import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g6-lmsz6g.css';
import '../../css/i/iguwy6bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g6-lmsz6g"/><path class="iguwy6bew"/></g>`,
		"fallback": "streamline-freehand-color:conversation-chat",
	});
}

export default Component;
