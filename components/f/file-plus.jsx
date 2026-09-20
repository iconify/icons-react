import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/czaugybyw.css';
import '../../css/x/xblcwhbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="czaugybyw"/><path clip-rule="evenodd" class="xblcwhbiy"/></g>`,
		"fallback": "reicon:file-plus",
	});
}

export default Component;
