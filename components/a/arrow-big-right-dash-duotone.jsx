import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/txiuepb4c.css';
import '../../css/c/cdtpe4n8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary txiuepb4c"/><path class="cdtpe4n8r primary"/></g>`,
		"fallback": "iconaut:arrow-big-right-dash-duotone",
	});
}

export default Component;
