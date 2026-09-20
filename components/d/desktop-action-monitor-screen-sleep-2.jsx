import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u2qlcmk4k.css';
import '../../css/g/gjteu3lse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u2qlcmk4k"/><path class="gjteu3lse"/></g>`,
		"fallback": "streamline-freehand-color:desktop-action-monitor-screen-sleep-2",
	});
}

export default Component;
