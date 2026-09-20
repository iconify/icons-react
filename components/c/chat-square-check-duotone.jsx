import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fwfd39bzf.css';
import '../../css/t/ttqoo1kux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fwfd39bzf"/><path class="ttqoo1kux"/></g>`,
		"fallback": "reicon:chat-square-check-duotone",
	});
}

export default Component;
