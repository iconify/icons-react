import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wp1vq7jxe.css';
import '../../css/e/eirp7pbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wp1vq7jxe"/><path class="eirp7pbig primary"/></g>`,
		"fallback": "iconaut:database-cog-duotone",
	});
}

export default Component;
