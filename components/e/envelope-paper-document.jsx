import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g6i8iq8rr.css';
import '../../css/a/a77durkmo.css';
import '../../css/n/n8-b6z1gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g6i8iq8rr"/><path class="a77durkmo"/><path class="n8-b6z1gv"/></g>`,
		"fallback": "streamline-freehand-color:envelope-paper-document",
	});
}

export default Component;
