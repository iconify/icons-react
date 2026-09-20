import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw53_rx6z.css';
import '../../css/w/w32jeb4uj.css';
import '../../css/f/f3kl78hjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xw53_rx6z"/><path class="w32jeb4uj"/><path class="f3kl78hjb"/></g>`,
		"fallback": "streamline-freehand-color:floppy-disk",
	});
}

export default Component;
