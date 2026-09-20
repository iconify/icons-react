import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/igexaabro.css';
import '../../css/g/gn9a3_eca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="igexaabro"/><path class="gn9a3_eca"/></g>`,
		"fallback": "solar:crown-bold",
	});
}

export default Component;
