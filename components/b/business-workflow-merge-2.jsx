import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l41ccpd6k.css';
import '../../css/g/g-6ru4bzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l41ccpd6k"/><path class="g-6ru4bzs"/></g>`,
		"fallback": "streamline-freehand-color:business-workflow-merge-2",
	});
}

export default Component;
