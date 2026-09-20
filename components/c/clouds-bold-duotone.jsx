import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y9wo9jbzw.css';
import '../../css/v/v8ug_cbjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y9wo9jbzw"/><path class="v8ug_cbjd"/></g>`,
		"fallback": "solar:clouds-bold-duotone",
	});
}

export default Component;
