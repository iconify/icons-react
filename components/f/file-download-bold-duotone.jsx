import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e18j-rbjv.css';
import '../../css/d/dz40ib6ea.css';
import '../../css/t/t7rw-xbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e18j-rbjv"/><path class="dz40ib6ea"/><path class="t7rw-xbvl"/></g>`,
		"fallback": "solar:file-download-bold-duotone",
	});
}

export default Component;
