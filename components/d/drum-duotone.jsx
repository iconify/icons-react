import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dz8al6bne.css';
import '../../css/v/vbrifebti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dz8al6bne secondary"/><path class="primary vbrifebti"/></g>`,
		"fallback": "iconaut:drum-duotone",
	});
}

export default Component;
