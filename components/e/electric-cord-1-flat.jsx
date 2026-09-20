import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgv46dmsk.css';
import '../../css/f/f25p94b3g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rgv46dmsk"/><path class="f25p94b3g"/></g>`,
		"fallback": "streamline-color:electric-cord-1-flat",
	});
}

export default Component;
