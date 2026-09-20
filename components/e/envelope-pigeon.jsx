import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n49nhpbar.css';
import '../../css/g/g4fvx3bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n49nhpbar"/><path class="g4fvx3bcc"/></g>`,
		"fallback": "streamline-freehand-color:envelope-pigeon",
	});
}

export default Component;
