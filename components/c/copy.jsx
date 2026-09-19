import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nmr8l5plz.css';
import '../../css/b/b0-qqrbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nmr8l5plz"/><path clip-rule="evenodd" class="b0-qqrbji"/></g>`,
		"fallback": "gg:copy",
	});
}

export default Component;
