import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c689j2k5b.css';
import '../../css/o/o19zt1bfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c689j2k5b"/><path clip-rule="evenodd" class="o19zt1bfo"/></g>`,
		"fallback": "reicon:globe-pointer-filled",
	});
}

export default Component;
