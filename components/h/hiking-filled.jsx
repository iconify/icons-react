import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z07svtb3r.css';
import '../../css/x/xchua7bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z07svtb3r"/><path clip-rule="evenodd" class="xchua7bgh"/></g>`,
		"fallback": "reicon:hiking-filled",
	});
}

export default Component;
