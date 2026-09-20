import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m-0b3sdps.css';
import '../../css/j/jcvvnm9up.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m-0b3sdps"/><path class="jcvvnm9up"/></g>`,
		"fallback": "solar:file-text-bold",
	});
}

export default Component;
