import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5p-pccsc.css';
import '../../css/m/mitbif5th.css';
import '../../css/j/jmv7v2izv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e5p-pccsc"/><path class="mitbif5th"/><path class="jmv7v2izv"/></g>`,
		"fallback": "streamline-flex-color:fire-alarm-2",
	});
}

export default Component;
