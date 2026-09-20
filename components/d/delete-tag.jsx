import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nafzgrc8e.css';
import '../../css/v/vu8pdkbwl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nafzgrc8e"/><path class="vu8pdkbwl"/></g>`,
		"fallback": "streamline-flex-color:delete-tag",
	});
}

export default Component;
