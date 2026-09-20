import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rt553rbwj.css';
import '../../css/l/lxtmctb5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rt553rbwj"/><path clip-rule="evenodd" class="lxtmctb5s"/></g>`,
		"fallback": "solar:backpack-outline",
	});
}

export default Component;
