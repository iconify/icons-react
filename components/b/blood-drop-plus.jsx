import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oru5ymoak.css';
import '../../css/k/k5ctd6bnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="oru5ymoak"/><path class="k5ctd6bnd"/></g>`,
		"fallback": "griddy-icons:blood-drop-plus",
	});
}

export default Component;
