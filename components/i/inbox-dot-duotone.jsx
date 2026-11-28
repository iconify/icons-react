import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8x73_b8m.css';
import '../../css/i/i6fhem4ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j8x73_b8m secondary"/><path class="i6fhem4ms primary"/></g>`,
		"fallback": "iconaut:inbox-dot-duotone",
	});
}

export default Component;
