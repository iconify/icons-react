import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ct5dtnx2p.css';
import '../../css/b/bycttlbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ct5dtnx2p"/><path class="bycttlbxf"/></g>`,
		"fallback": "reicon:direct-notification-filled",
	});
}

export default Component;
