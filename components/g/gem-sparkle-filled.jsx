import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i505jjv1z.css';
import '../../css/n/ni4umccyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i505jjv1z"/><path clip-rule="evenodd" class="ni4umccyj"/></g>`,
		"fallback": "reicon:gem-sparkle-filled",
	});
}

export default Component;
