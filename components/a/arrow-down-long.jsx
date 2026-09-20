import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whfeknbla.css';
import '../../css/f/f7h-fnxcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whfeknbla"/><path class="f7h-fnxcc"/></g>`,
		"fallback": "lets-icons:arrow-down-long",
	});
}

export default Component;
