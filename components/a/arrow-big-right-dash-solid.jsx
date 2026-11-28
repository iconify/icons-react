import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e63_fb7wp.css';
import '../../css/c/cdtpe4n8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e63_fb7wp"/><path class="cdtpe4n8r"/></g>`,
		"fallback": "iconaut:arrow-big-right-dash-solid",
	});
}

export default Component;
