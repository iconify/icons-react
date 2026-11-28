import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fppntxbtj.css';
import '../../css/v/vuwn7b9dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fppntxbtj secondary"/><path class="primary vuwn7b9dk"/></g>`,
		"fallback": "iconaut:download-duotone",
	});
}

export default Component;
