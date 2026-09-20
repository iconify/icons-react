import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/luul6bkpl.css';
import '../../css/i/iwu8_6b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="luul6bkpl"/><path class="iwu8_6b5e"/></g>`,
		"fallback": "reicon:headset-filled",
	});
}

export default Component;
