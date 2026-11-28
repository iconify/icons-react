import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/towc2vwje.css';
import '../../css/m/mcvidab1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary towc2vwje"/><path class="mcvidab1v primary"/></g>`,
		"fallback": "iconaut:factory-duotone",
	});
}

export default Component;
