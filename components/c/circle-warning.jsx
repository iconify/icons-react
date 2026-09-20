import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zdke2vb7y.css';
import '../../css/w/wy3fqvbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zdke2vb7y"/><path class="wy3fqvbza"/></g>`,
		"fallback": "mi:circle-warning",
	});
}

export default Component;
