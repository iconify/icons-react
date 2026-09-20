import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gro5h1bir.css';
import '../../css/e/ew18oib6k.css';
import '../../css/e/ez0_tuu0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gro5h1bir"/><path clip-rule="evenodd" class="ew18oib6k"/><path class="ez0_tuu0v"/></g>`,
		"fallback": "reicon:hiking2-duotone",
	});
}

export default Component;
