import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6fbk-bit.css';
import '../../css/a/atgrwwbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l6fbk-bit"/><path class="atgrwwbwn"/></g>`,
		"fallback": "keyline-icons:dice-5-sharp-duotone",
	});
}

export default Component;
