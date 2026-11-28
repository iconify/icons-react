import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wp941rjtg.css';
import '../../css/i/i181okbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wp941rjtg"/><path class="i181okbgd primary"/></g>`,
		"fallback": "iconaut:calendar-sparkles-duotone",
	});
}

export default Component;
