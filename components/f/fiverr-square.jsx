import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wq5brgbld.css';
import '../../css/k/kepyspbyy.css';
import '../../css/p/pltokbbut.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wq5brgbld"/><circle class="kepyspbyy"/><path class="pltokbbut"/></g>`,
		"fallback": "jam:fiverr-square",
	});
}

export default Component;
