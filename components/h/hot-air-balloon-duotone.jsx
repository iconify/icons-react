import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sv_r3abmb.css';
import '../../css/f/fmoq4kb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary sv_r3abmb"/><path class="fmoq4kb5u primary"/></g>`,
		"fallback": "iconaut:hot-air-balloon-duotone",
	});
}

export default Component;
