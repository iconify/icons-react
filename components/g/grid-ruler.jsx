import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x704tpbxt.css';
import '../../css/e/e8v11vout.css';
import '../../css/h/h-edmwpxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x704tpbxt"/><path class="e8v11vout"/><path class="h-edmwpxg"/></g>`,
		"fallback": "streamline-freehand-color:grid-ruler",
	});
}

export default Component;
