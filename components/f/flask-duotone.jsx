import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bo6ejy8je.css';
import '../../css/u/u8s1-8b8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bo6ejy8je secondary"/><path class="primary u8s1-8b8r"/></g>`,
		"fallback": "iconaut:flask-duotone",
	});
}

export default Component;
