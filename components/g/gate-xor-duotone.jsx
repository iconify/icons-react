import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ilmys3b8b.css';
import '../../css/y/yvg8rcbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ilmys3b8b secondary"/><path class="primary yvg8rcbas"/></g>`,
		"fallback": "iconaut:gate-xor-duotone",
	});
}

export default Component;
