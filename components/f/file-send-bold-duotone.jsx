import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e18j-rbjv.css';
import '../../css/i/i_5p6-b4l.css';
import '../../css/t/t7rw-xbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e18j-rbjv"/><path class="i_5p6-b4l"/><path class="t7rw-xbvl"/></g>`,
		"fallback": "solar:file-send-bold-duotone",
	});
}

export default Component;
