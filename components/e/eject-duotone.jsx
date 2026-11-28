import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/khasz-0nm.css';
import '../../css/d/d_2at3b5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="khasz-0nm secondary"/><path class="d_2at3b5x primary"/></g>`,
		"fallback": "iconaut:eject-duotone",
	});
}

export default Component;
