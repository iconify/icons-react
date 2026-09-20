import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dj3utkb_n.css';
import '../../css/n/nwqxq-bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dj3utkb_n"/><path class="nwqxq-bhh"/></g>`,
		"fallback": "solar:display-bold-duotone",
	});
}

export default Component;
