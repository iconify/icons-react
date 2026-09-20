import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3wvn-3zg.css';
import '../../css/h/h92wdupzb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3wvn-3zg"/><path class="h92wdupzb"/></g>`,
		"fallback": "streamline-flex-color:camping-tent",
	});
}

export default Component;
