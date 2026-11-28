import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o8j9apujm.css';
import '../../css/s/s6ph32b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o8j9apujm secondary"/><path class="primary s6ph32b6o"/></g>`,
		"fallback": "iconaut:burger-duotone",
	});
}

export default Component;
