import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzknz7bre.css';
import '../../css/c/cxqqq7bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vzknz7bre"/><path clip-rule="evenodd" class="cxqqq7bzj"/></g>`,
		"fallback": "reicon:chalkboard",
	});
}

export default Component;
