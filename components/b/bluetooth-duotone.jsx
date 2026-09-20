import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nx3f63ezb.css';
import '../../css/n/noa1q63gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nx3f63ezb"/><path class="noa1q63gp"/></g>`,
		"fallback": "reicon:bluetooth-duotone",
	});
}

export default Component;
