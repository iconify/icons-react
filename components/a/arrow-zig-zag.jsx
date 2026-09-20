import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n92r70som.css';
import '../../css/f/fd5zpjvnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n92r70som"/><path class="fd5zpjvnz"/></g>`,
		"fallback": "tabler:arrow-zig-zag",
	});
}

export default Component;
