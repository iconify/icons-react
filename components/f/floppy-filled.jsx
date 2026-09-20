import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u8lg3um7e.css';
import '../../css/z/z4ir5zbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u8lg3um7e"/><path class="z4ir5zbrt"/></g>`,
		"fallback": "reicon:floppy-filled",
	});
}

export default Component;
