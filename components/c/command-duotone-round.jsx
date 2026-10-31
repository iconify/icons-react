import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b570g5hkt.css';
import '../../css/o/oh5ohjntf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b570g5hkt"/><path class="oh5ohjntf"/></g>`,
		"fallback": "coolicons:command-duotone-round",
	});
}

export default Component;
