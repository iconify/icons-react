import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dsledwfgc.css';
import '../../css/c/cwrix038h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dsledwfgc"/><path class="cwrix038h"/></g>`,
		"fallback": "reicon:arrow-down-duotone",
	});
}

export default Component;
