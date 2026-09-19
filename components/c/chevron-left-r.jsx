import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a8cc5rhau.css';
import '../../css/k/kph-kdb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a8cc5rhau"/><path clip-rule="evenodd" class="kph-kdb1u"/></g>`,
		"fallback": "gg:chevron-left-r",
	});
}

export default Component;
