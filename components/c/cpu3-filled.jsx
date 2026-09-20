import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xuu4dt9te.css';
import '../../css/o/o-0l8_bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xuu4dt9te"/><path class="o-0l8_bfh"/></g>`,
		"fallback": "reicon:cpu3-filled",
	});
}

export default Component;
