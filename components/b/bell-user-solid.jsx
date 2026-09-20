import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvraihb5r.css';
import '../../css/v/vgmlv0b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvraihb5r"/><path class="vgmlv0b6r"/></g>`,
		"fallback": "mynaui:bell-user-solid",
	});
}

export default Component;
