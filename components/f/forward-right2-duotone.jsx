import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ny0g81zbw.css';
import '../../css/t/tys43_8if.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ny0g81zbw"/><path clip-rule="evenodd" class="tys43_8if"/></g>`,
		"fallback": "reicon:forward-right2-duotone",
	});
}

export default Component;
