import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/avkg3bs5s.css';
import '../../css/v/v04xb8btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="avkg3bs5s"/><path class="v04xb8btp"/></g>`,
		"fallback": "tabler:arrow-autofit-down-filled",
	});
}

export default Component;
