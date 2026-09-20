import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9nnko0mb.css';
import '../../css/d/djdm1bbmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9nnko0mb"/><path clip-rule="evenodd" class="djdm1bbmu"/></g>`,
		"fallback": "lets-icons:group-share",
	});
}

export default Component;
