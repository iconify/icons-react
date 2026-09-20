import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l4pfilrbr.css';
import '../../css/m/mv74flbio.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-3.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l4pfilrbr"/><path class="mv74flbio"/></g>`,
		"fallback": "jam:amazon",
	});
}

export default Component;
