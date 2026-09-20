import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ev_xszbbj.css';
import '../../css/c/cf3z0756z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ev_xszbbj"/><path class="cf3z0756z"/></g>`,
		"fallback": "reicon:gallery-add-duotone",
	});
}

export default Component;
