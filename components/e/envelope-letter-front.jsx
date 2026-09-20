import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9fk2eb4t.css';
import '../../css/r/rx6u5lbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i9fk2eb4t"/><path class="rx6u5lbfc"/></g>`,
		"fallback": "streamline-freehand-color:envelope-letter-front",
	});
}

export default Component;
