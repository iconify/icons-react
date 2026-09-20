import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjfk6vnme.css';
import '../../css/z/zmfcq7utl.css';
import '../../css/x/xhom9foli.css';
import '../../css/e/e1_axjb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hjfk6vnme"/><path class="zmfcq7utl"/><path class="xhom9foli"/><path class="e1_axjb6a"/></g>`,
		"fallback": "solar:chandelier-bold-duotone",
	});
}

export default Component;
