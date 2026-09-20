import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v9n57f0ap.css';
import '../../css/o/ohmdx3_wm.css';
import '../../css/h/h3m2r4bii.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v9n57f0ap"/><path class="ohmdx3_wm"/><path class="h3m2r4bii"/></g>`,
		"fallback": "streamline-color:android",
	});
}

export default Component;
