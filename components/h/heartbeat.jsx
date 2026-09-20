import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k1nn0b5il.css';
import '../../css/j/jfib97gth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k1nn0b5il"/><path class="jfib97gth"/></g>`,
		"fallback": "tabler:heartbeat",
	});
}

export default Component;
