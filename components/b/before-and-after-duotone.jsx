import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/deu7ih6ht.css';
import '../../css/n/no9wqdbop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="deu7ih6ht secondary"/><path class="no9wqdbop primary"/></g>`,
		"fallback": "iconaut:before-and-after-duotone",
	});
}

export default Component;
