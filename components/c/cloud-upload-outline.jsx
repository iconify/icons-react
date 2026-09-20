import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jlj51cf8k.css';
import '../../css/x/xojwfab5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jlj51cf8k"/><path class="xojwfab5e"/></g>`,
		"fallback": "solar:cloud-upload-outline",
	});
}

export default Component;
