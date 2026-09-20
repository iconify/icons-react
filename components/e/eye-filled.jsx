import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r8_oqnbcm.css';
import '../../css/f/f3raxwfza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r8_oqnbcm"/><path clip-rule="evenodd" class="f3raxwfza"/></g>`,
		"fallback": "reicon:eye-filled",
	});
}

export default Component;
