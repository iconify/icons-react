import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcdm4-b9o.css';
import '../../css/t/t6lndlu0r.css';
import '../../css/o/ol5--vb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fcdm4-b9o"/><path class="t6lndlu0r"/><path clip-rule="evenodd" class="ol5--vb1y"/></g>`,
		"fallback": "reicon:image-up",
	});
}

export default Component;
