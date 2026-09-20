import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3gkvi2sv.css';
import '../../css/n/n6h9d0b4y.css';
import '../../css/o/obzaa1bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d3gkvi2sv"/><path class="n6h9d0b4y"/><path class="obzaa1bte"/></g>`,
		"fallback": "streamline-freehand-color:apps-laptop-shield",
	});
}

export default Component;
