import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y5q06eb2q.css';
import '../../css/g/g7-ln_bpa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y5q06eb2q"/><path class="g7-ln_bpa"/></g>`,
		"fallback": "streamline-color:camping-tent",
	});
}

export default Component;
