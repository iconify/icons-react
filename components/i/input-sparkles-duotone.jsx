import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/byxc5x1dz.css';
import '../../css/i/itjv7ab0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="byxc5x1dz secondary"/><path class="itjv7ab0e primary"/></g>`,
		"fallback": "iconaut:input-sparkles-duotone",
	});
}

export default Component;
