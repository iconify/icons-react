import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cwnhso7ti.css';
import '../../css/r/rsgd5xbzn.css';
import '../../css/w/wcnkyxb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cwnhso7ti"/><path class="rsgd5xbzn"/><path class="wcnkyxb0l"/></g>`,
		"fallback": "reicon:align-h-center-duotone",
	});
}

export default Component;
