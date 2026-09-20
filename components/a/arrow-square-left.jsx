import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pltokbbut.css';
import '../../css/d/dti4wz8zy.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pltokbbut"/><path class="dti4wz8zy"/></g>`,
		"fallback": "jam:arrow-square-left",
	});
}

export default Component;
