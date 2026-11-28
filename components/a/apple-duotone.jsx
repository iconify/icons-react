import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spvblvkjp.css';
import '../../css/h/h5t52qzdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary spvblvkjp"/><path class="h5t52qzdz primary"/></g>`,
		"fallback": "iconaut:apple-duotone",
	});
}

export default Component;
