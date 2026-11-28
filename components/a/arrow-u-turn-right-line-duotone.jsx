import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xfa1ijb5u.css';
import '../../css/g/g3ieym5gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xfa1ijb5u"/><path class="g3ieym5gw primary"/></g>`,
		"fallback": "iconaut:arrow-u-turn-right-line-duotone",
	});
}

export default Component;
