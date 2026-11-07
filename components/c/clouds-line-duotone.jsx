import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r99a47bur.css';
import '../../css/d/d_9a2b7tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r99a47bur"/><path class="d_9a2b7tg"/></g>`,
		"fallback": "solar:clouds-line-duotone",
	});
}

export default Component;
