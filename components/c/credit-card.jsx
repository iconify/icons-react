import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v4cyobbxf.css';
import '../../css/o/okeapeb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v4cyobbxf"/><path clip-rule="evenodd" class="okeapeb4w"/></g>`,
		"fallback": "reicon:credit-card",
	});
}

export default Component;
