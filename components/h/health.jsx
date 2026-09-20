import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gipfwzbxn.css';
import '../../css/o/opo4lbe6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gipfwzbxn"/><path clip-rule="evenodd" class="opo4lbe6r"/></g>`,
		"fallback": "reicon:health",
	});
}

export default Component;
