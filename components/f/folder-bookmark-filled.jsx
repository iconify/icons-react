import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/le-ulwkmv.css';
import '../../css/v/v5yohbhrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="le-ulwkmv"/><path class="v5yohbhrg"/></g>`,
		"fallback": "reicon:folder-bookmark-filled",
	});
}

export default Component;
