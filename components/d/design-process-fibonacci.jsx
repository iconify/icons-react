import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ay1niv29e.css';
import '../../css/g/gclchtbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ay1niv29e"/><path class="gclchtbhw"/></g>`,
		"fallback": "streamline-freehand-color:design-process-fibonacci",
	});
}

export default Component;
