import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uob8_s41r.css';
import '../../css/x/xs3v8xb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary uob8_s41r"/><path class="primary xs3v8xb1a"/></g>`,
		"fallback": "iconaut:hotdog-duotone",
	});
}

export default Component;
