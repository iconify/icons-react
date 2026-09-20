import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mebb85mry.css';
import '../../css/y/y-8uw-nze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mebb85mry"/><path clip-rule="evenodd" class="y-8uw-nze"/></g>`,
		"fallback": "reicon:arrow-up-square",
	});
}

export default Component;
