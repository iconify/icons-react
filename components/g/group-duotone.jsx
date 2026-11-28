import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ox0o5cc5d.css';
import '../../css/x/xrx5adcza.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ox0o5cc5d"/><path class="xrx5adcza"/></g>`,
		"fallback": "pullo:group-duotone",
	});
}

export default Component;
