import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oas7ijtuz.css';
import '../../css/p/pdm3inspy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oas7ijtuz"/><path class="pdm3inspy"/></g>`,
		"fallback": "streamline-freehand-color:apps-monitor-user",
	});
}

export default Component;
