import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/it6v310-a.css';
import '../../css/d/djebj4bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="it6v310-a secondary"/><path class="djebj4bpa primary"/></g>`,
		"fallback": "iconaut:cloud-fog-duotone",
	});
}

export default Component;
