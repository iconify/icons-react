import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ayl3yr5fw.css';
import '../../css/w/wyu8pxfbe.css';
import '../../css/a/apm0xsbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ayl3yr5fw"/><path class="wyu8pxfbe"/><path clip-rule="evenodd" class="apm0xsbgl"/></g>`,
		"fallback": "solar:folder-path-connect-bold-duotone",
	});
}

export default Component;
