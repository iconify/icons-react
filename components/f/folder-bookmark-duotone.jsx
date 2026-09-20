import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q703utb0f.css';
import '../../css/x/xej-7lbhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q703utb0f"/><path class="xej-7lbhg"/></g>`,
		"fallback": "reicon:folder-bookmark-duotone",
	});
}

export default Component;
