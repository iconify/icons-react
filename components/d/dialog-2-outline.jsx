import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g44gcmbhf.css';
import '../../css/x/xvo9-2b5e.css';
import '../../css/b/b18ml9b7e.css';
import '../../css/x/xyc0cgvgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g44gcmbhf"/><path class="xvo9-2b5e"/><path class="b18ml9b7e"/><path class="xyc0cgvgu"/></g>`,
		"fallback": "solar:dialog-2-outline",
	});
}

export default Component;
