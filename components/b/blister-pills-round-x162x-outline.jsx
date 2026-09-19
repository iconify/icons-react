import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5hnbmgxl.css';
import '../../css/d/dp6m2fb9r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i5hnbmgxl"/><path class="dp6m2fb9r"/></g>`,
		"fallback": "healthicons:blister-pills-round-x162x-outline",
	});
}

export default Component;
