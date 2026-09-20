import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h028ofh4x.css';
import '../../css/w/wj0wawbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h028ofh4x"/><path class="wj0wawbmg"/></g>`,
		"fallback": "reicon:gallery-slash-filled",
	});
}

export default Component;
