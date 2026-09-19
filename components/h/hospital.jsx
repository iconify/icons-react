import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vs-0urbil.css';
import '../../css/o/ovunx59rd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vs-0urbil"/><path clip-rule="evenodd" class="ovunx59rd"/></g>`,
		"fallback": "healthicons:hospital",
	});
}

export default Component;
