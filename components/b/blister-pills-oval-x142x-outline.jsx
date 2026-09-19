import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fh13o9bct.css';
import '../../css/e/eqj9trbhr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fh13o9bct"/><path clip-rule="evenodd" class="eqj9trbhr"/></g>`,
		"fallback": "healthicons:blister-pills-oval-x142x-outline",
	});
}

export default Component;
