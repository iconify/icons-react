import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1clfb17a.css';
import '../../css/m/matxqx2rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1clfb17a secondary"/><path class="matxqx2rt primary"/></g>`,
		"fallback": "iconaut:comma-duotone",
	});
}

export default Component;
