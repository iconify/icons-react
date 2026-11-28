import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w4olce43p.css';
import '../../css/y/ynzkpkbhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w4olce43p"/><path class="ynzkpkbhy"/></g>`,
		"fallback": "iconaut:flag-swallowtail-solid",
	});
}

export default Component;
