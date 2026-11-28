import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybf53ctez.css';
import '../../css/r/rfbnb4bgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ybf53ctez"/><path class="primary rfbnb4bgd"/></g>`,
		"fallback": "iconaut:arrow-u-turn-left-line-duotone",
	});
}

export default Component;
