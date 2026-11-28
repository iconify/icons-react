import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kz9i16r0x.css';
import '../../css/a/apc2_bcxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kz9i16r0x secondary"/><path class="apc2_bcxd primary"/></g>`,
		"fallback": "iconaut:diamonds-duotone",
	});
}

export default Component;
