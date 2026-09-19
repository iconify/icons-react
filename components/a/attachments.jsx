import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vzhwfitid.css';
import '../../css/y/y4_864bcs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vzhwfitid"/><path class="y4_864bcs"/></g>`,
		"fallback": "et:attachments",
	});
}

export default Component;
