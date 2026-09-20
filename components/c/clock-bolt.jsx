import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j-7l0kbto.css';
import '../../css/w/w8xo6-imr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j-7l0kbto"/><path class="w8xo6-imr"/></g>`,
		"fallback": "tabler:clock-bolt",
	});
}

export default Component;
