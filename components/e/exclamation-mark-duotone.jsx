import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/soazu3b3q.css';
import '../../css/s/sbosf16jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary soazu3b3q"/><path class="primary sbosf16jf"/></g>`,
		"fallback": "iconaut:exclamation-mark-duotone",
	});
}

export default Component;
