import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cffl50b_w.css';
import '../../css/f/f7nm9cc1p.css';
import '../../css/e/ei2m3mbbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cffl50b_w"/><path class="f7nm9cc1p"/><path class="ei2m3mbbr"/></g>`,
		"fallback": "streamline-freehand-color:composition-16-to-9",
	});
}

export default Component;
