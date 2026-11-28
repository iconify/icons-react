import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1a7mkz6m.css';
import '../../css/m/mh_v1okuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1a7mkz6m secondary"/><path class="mh_v1okuj primary"/></g>`,
		"fallback": "iconaut:bike-duotone",
	});
}

export default Component;
