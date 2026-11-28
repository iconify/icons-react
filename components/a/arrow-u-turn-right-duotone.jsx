import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fky4-ab2q.css';
import '../../css/s/s4o9cpgid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fky4-ab2q secondary"/><path class="primary s4o9cpgid"/></g>`,
		"fallback": "iconaut:arrow-u-turn-right-duotone",
	});
}

export default Component;
