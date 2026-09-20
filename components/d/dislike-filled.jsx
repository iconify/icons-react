import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtrzwys0f.css';
import '../../css/a/ayh0_8g9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wtrzwys0f"/><path clip-rule="evenodd" class="ayh0_8g9u"/></g>`,
		"fallback": "reicon:dislike-filled",
	});
}

export default Component;
