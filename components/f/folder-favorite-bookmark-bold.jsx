import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fd132xehi.css';
import '../../css/s/ssfdtlxpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fd132xehi"/><path class="ssfdtlxpe"/></g>`,
		"fallback": "solar:folder-favorite-bookmark-bold",
	});
}

export default Component;
