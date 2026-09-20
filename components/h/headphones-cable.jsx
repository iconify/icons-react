import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9qia6m1g.css';
import '../../css/x/xme3sy4ib.css';
import '../../css/e/elcmgfb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j9qia6m1g"/><path class="xme3sy4ib"/><path class="elcmgfb-f"/></g>`,
		"fallback": "streamline-freehand-color:headphones-cable",
	});
}

export default Component;
