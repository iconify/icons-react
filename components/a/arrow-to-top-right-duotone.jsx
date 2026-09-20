import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hii84057m.css';
import '../../css/i/i6jjmzboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hii84057m"/><path class="i6jjmzboj"/></g>`,
		"fallback": "reicon:arrow-to-top-right-duotone",
	});
}

export default Component;
