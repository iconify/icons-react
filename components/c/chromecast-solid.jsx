import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rf1lcdbbf.css';
import '../../css/l/li-08qb4y.css';
import '../../css/l/lip2wgr-f.css';
import '../../css/k/kmednm97k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rf1lcdbbf"/><path class="li-08qb4y"/><path class="lip2wgr-f"/><path class="kmednm97k"/></g>`,
		"fallback": "nrk:chromecast-solid",
	});
}

export default Component;
