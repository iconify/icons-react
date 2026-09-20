import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nfrl3ebmi.css';
import '../../css/x/xblcwhbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nfrl3ebmi"/><path clip-rule="evenodd" class="xblcwhbiy"/></g>`,
		"fallback": "reicon:file-down",
	});
}

export default Component;
