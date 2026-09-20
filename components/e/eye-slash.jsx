import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ru9758-4n.css';
import '../../css/z/zeae7bceg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ru9758-4n"/><path class="zeae7bceg"/></g>`,
		"fallback": "nrk:eye-slash",
	});
}

export default Component;
