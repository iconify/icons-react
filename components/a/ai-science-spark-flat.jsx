import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gt69ahykh.css';
import '../../css/j/j7g2r5bop.css';
import '../../css/o/oydbk9mwq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gt69ahykh"/><path clip-rule="evenodd" class="j7g2r5bop"/><path clip-rule="evenodd" class="oydbk9mwq"/></g>`,
		"fallback": "streamline-color:ai-science-spark-flat",
	});
}

export default Component;
