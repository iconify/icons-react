import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyei83bdy.css';
import '../../css/k/ky5_2fbbr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uyei83bdy"/><path class="ky5_2fbbr"/></g>`,
		"fallback": "streamline-color:battery-empty-2",
	});
}

export default Component;
