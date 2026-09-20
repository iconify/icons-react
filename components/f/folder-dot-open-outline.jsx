import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch-uq_bzl.css';
import '../../css/b/bonx3rv8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ch-uq_bzl"/><path clip-rule="evenodd" class="bonx3rv8p"/></g>`,
		"fallback": "solar:folder-dot-open-outline",
	});
}

export default Component;
