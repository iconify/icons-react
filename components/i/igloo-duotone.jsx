import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/udst7jsdb.css';
import '../../css/n/n__fixhms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary udst7jsdb"/><path class="n__fixhms primary"/></g>`,
		"fallback": "iconaut:igloo-duotone",
	});
}

export default Component;
