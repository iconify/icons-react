import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n1wfzibcr.css';
import '../../css/q/qrfulp6ea.css';
import '../../css/o/o8m8bzyzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n1wfzibcr"/><path class="qrfulp6ea"/><path class="o8m8bzyzx"/></g>`,
		"fallback": "streamline-cyber-color:fork-knife",
	});
}

export default Component;
