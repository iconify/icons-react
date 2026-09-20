import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hinwpub3r.css';
import '../../css/i/icp4u99wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hinwpub3r"/><path class="icp4u99wm"/></g>`,
		"fallback": "reicon:heart-add-filled",
	});
}

export default Component;
