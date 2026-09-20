import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8rm0wp9j.css';
import '../../css/u/uvhgt6hxi.css';
import '../../css/e/em3von1-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8rm0wp9j"/><path class="uvhgt6hxi"/><path class="em3von1-q"/></g>`,
		"fallback": "streamline-freehand-color:app-window-graph",
	});
}

export default Component;
