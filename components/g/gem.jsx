import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/npt9ygbzn.css';
import '../../css/p/pk-y8fbct.css';
import '../../css/a/aeid6kvpe.css';
import '../../css/c/ch4k4jb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="npt9ygbzn wm-k"/><path class="pk-y8fbct wm-deco"/><path class="aeid6kvpe wm-k"/><path class="ch4k4jb6h wm-shadow"/></g>`,
		"fallback": "withicons-valentine:gem",
	});
}

export default Component;
