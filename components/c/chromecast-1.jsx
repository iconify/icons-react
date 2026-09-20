import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ll29zwxkp.css';
import '../../css/l/li-08qb4y.css';
import '../../css/l/lip2wgr-f.css';
import '../../css/k/k8vjp8bic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ll29zwxkp"/><path class="li-08qb4y"/><path class="lip2wgr-f"/><path class="k8vjp8bic"/></g>`,
		"fallback": "nrk:chromecast-1",
	});
}

export default Component;
