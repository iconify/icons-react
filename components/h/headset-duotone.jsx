import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sdc9i5i1o.css';
import '../../css/i/ivzyn8l-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sdc9i5i1o secondary"/><path class="ivzyn8l-o primary"/></g>`,
		"fallback": "iconaut:headset-duotone",
	});
}

export default Component;
