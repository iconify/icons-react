import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xhuup4l8x.css';
import '../../css/f/fg7fgdbry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-k xhuup4l8x"/><path class="fg7fgdbry wm-a"/></g>`,
		"fallback": "withicons-bauhaus:contrast",
	});
}

export default Component;
