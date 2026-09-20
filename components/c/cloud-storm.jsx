import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/befce3bkr.css';
import '../../css/j/j0cxxxbnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="befce3bkr"/><path class="j0cxxxbnr"/></g>`,
		"fallback": "reicon:cloud-storm",
	});
}

export default Component;
