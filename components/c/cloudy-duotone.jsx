import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yiuccvb3c.css';
import '../../css/f/f46gahoxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary yiuccvb3c"/><path class="f46gahoxk primary"/></g>`,
		"fallback": "iconaut:cloudy-duotone",
	});
}

export default Component;
