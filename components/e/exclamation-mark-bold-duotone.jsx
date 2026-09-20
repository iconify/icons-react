import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/caqpebchd.css';
import '../../css/p/pdcao9bkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="caqpebchd"/><path class="pdcao9bkm"/></g>`,
		"fallback": "solar:exclamation-mark-bold-duotone",
	});
}

export default Component;
