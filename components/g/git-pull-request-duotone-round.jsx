import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p_-fa49ll.css';
import '../../css/f/fdfjldbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p_-fa49ll"/><path class="fdfjldbyu"/></g>`,
		"fallback": "coolicons:git-pull-request-duotone-round",
	});
}

export default Component;
