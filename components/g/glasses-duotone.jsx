import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0w-hz2uj.css';
import '../../css/s/sxssajb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m0w-hz2uj"/><path class="sxssajb9v"/></g>`,
		"fallback": "reicon:glasses-duotone",
	});
}

export default Component;
