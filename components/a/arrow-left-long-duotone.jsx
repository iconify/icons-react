import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/imuwd6beu.css';
import '../../css/o/obxmp3i-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="imuwd6beu secondary"/><path class="obxmp3i-v primary"/></g>`,
		"fallback": "iconaut:arrow-left-long-duotone",
	});
}

export default Component;
