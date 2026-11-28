import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sz93h6bbl.css';
import '../../css/m/mo85vob3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary sz93h6bbl"/><path class="mo85vob3k primary"/></g>`,
		"fallback": "iconaut:image-off-duotone",
	});
}

export default Component;
