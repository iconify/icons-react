import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zmh-ejbpt.css';
import '../../css/d/d800ssszr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zmh-ejbpt"/><path class="d800ssszr"/></g>`,
		"fallback": "reicon:city-duotone",
	});
}

export default Component;
