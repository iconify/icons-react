import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qax0en9df.css';
import '../../css/e/e7qg44ydn.css';
import '../../css/k/kyo4-ot9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qax0en9df"/><path clip-rule="evenodd" class="e7qg44ydn"/><path class="kyo4-ot9b"/></g>`,
		"fallback": "flowbite:cloud-meatball-solid",
	});
}

export default Component;
