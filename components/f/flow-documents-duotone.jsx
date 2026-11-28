import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xtm8epbsp.css';
import '../../css/i/i6b5tob3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xtm8epbsp"/><path class="i6b5tob3g primary"/></g>`,
		"fallback": "iconaut:flow-documents-duotone",
	});
}

export default Component;
