import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wooj18_6p.css';
import '../../css/i/i2t_1nb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wooj18_6p"/><path class="i2t_1nb-r"/></g>`,
		"fallback": "reicon:direct-inbox-filled",
	});
}

export default Component;
