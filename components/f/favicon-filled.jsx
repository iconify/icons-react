import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g47rbeb6d.css';
import '../../css/a/avmp_1b7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g47rbeb6d"/><path class="avmp_1b7j"/></g>`,
		"fallback": "tabler:favicon-filled",
	});
}

export default Component;
