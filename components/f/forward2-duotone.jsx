import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uqeqetw9h.css';
import '../../css/x/xv4yq4bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="uqeqetw9h"/><path class="xv4yq4bcb"/></g>`,
		"fallback": "reicon:forward2-duotone",
	});
}

export default Component;
