import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lg7rofggi.css';
import '../../css/a/ack6o5ijv.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lg7rofggi"/><path class="ack6o5ijv"/></g>`,
		"fallback": "pullo:forward-10-duotone",
	});
}

export default Component;
