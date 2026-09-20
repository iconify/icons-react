import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sb3xpybes.css';
import '../../css/p/p1c57ab3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sb3xpybes"/><path class="p1c57ab3k"/></g>`,
		"fallback": "tabler:home-heart",
	});
}

export default Component;
