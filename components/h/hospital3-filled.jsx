import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zai7smaih.css';
import '../../css/g/gyf23-3xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zai7smaih"/><path class="gyf23-3xc"/></g>`,
		"fallback": "reicon:hospital3-filled",
	});
}

export default Component;
