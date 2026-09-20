import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qf22-4gqy.css';
import '../../css/b/b-zidoiwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qf22-4gqy"/><path class="b-zidoiwy"/></g>`,
		"fallback": "solar:cpu-bold-duotone",
	});
}

export default Component;
