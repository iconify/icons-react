import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g02ml3bcm.css';
import '../../css/e/e8cf9cb-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g02ml3bcm"/><path class="e8cf9cb-t"/></g>`,
		"fallback": "reicon:angles-left2-filled",
	});
}

export default Component;
