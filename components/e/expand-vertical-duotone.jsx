import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gj1n-r80l.css';
import '../../css/l/l4yrssbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gj1n-r80l secondary"/><path class="l4yrssbrr primary"/></g>`,
		"fallback": "iconaut:expand-vertical-duotone",
	});
}

export default Component;
