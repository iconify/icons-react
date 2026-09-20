import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l6fbk-bit.css';
import '../../css/c/cvoz9bbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l6fbk-bit"/><path class="cvoz9bbsx"/></g>`,
		"fallback": "keyline-icons:app-window-sharp-duotone",
	});
}

export default Component;
