import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6n6zfb0x.css';
import '../../css/c/czket_vlt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u6n6zfb0x"/><path class="czket_vlt primary"/></g>`,
		"fallback": "iconaut:dog-duotone",
	});
}

export default Component;
