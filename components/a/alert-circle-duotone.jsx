import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hinaxjb7n.css';
import '../../css/m/miz2psbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hinaxjb7n"/><path class="miz2psbjw"/></g>`,
		"fallback": "reicon:alert-circle-duotone",
	});
}

export default Component;
