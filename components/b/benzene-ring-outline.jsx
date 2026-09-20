import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ontiknnai.css';
import '../../css/f/fgmkb358s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ontiknnai"/><path clip-rule="evenodd" class="fgmkb358s"/></g>`,
		"fallback": "solar:benzene-ring-outline",
	});
}

export default Component;
