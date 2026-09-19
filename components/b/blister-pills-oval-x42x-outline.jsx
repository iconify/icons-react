import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qo3xvyhzr.css';
import '../../css/c/cwjg7g3za.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qo3xvyhzr"/><path clip-rule="evenodd" class="cwjg7g3za"/></g>`,
		"fallback": "healthicons:blister-pills-oval-x42x-outline",
	});
}

export default Component;
