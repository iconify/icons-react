import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbtmgmbdx.css';
import '../../css/i/i5hnbmgxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bbtmgmbdx"/><path clip-rule="evenodd" class="i5hnbmgxl"/></g>`,
		"fallback": "healthicons:blister-pills-round-x142x-outline",
	});
}

export default Component;
