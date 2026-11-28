import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tlerayhrw.css';
import '../../css/w/w3bu95_6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tlerayhrw"/><path class="primary w3bu95_6y"/></g>`,
		"fallback": "iconaut:chair-duotone",
	});
}

export default Component;
