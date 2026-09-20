import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bauwrbcls.css';
import '../../css/j/jm2_-abzt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bauwrbcls"/><path class="jm2_-abzt"/></g>`,
		"fallback": "streamline-flex-color:cursor-click-flat",
	});
}

export default Component;
