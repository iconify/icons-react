import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozctbqfry.css';
import '../../css/c/czrkmjb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ozctbqfry"/><path clip-rule="evenodd" class="czrkmjb5j"/></g>`,
		"fallback": "reicon:archive-filled",
	});
}

export default Component;
