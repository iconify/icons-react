import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mr8j7-b5d.css';
import '../../css/z/ztp4o7c9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mr8j7-b5d"/><path class="ztp4o7c9t"/></g>`,
		"fallback": "streamline-freehand-color:archive-drawer-2",
	});
}

export default Component;
