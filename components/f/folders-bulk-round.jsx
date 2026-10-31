import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nz10urdjl.css';
import '../../css/h/h89mikgff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nz10urdjl"/><path class="h89mikgff"/></g>`,
		"fallback": "coolicons:folders-bulk-round",
	});
}

export default Component;
