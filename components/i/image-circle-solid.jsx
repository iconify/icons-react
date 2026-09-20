import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lbuxi-_jb.css';
import '../../css/w/w1c7nef8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lbuxi-_jb"/><path class="w1c7nef8y"/></g>`,
		"fallback": "mynaui:image-circle-solid",
	});
}

export default Component;
