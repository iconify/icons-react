import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ieevidbrb.css';
import '../../css/d/d01h1p-kf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ieevidbrb"/><path class="d01h1p-kf"/></g>`,
		"fallback": "reicon:download2-filled",
	});
}

export default Component;
