import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jc551fbod.css';
import '../../css/y/yxri0vbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jc551fbod"/><path class="yxri0vbpx"/></g>`,
		"fallback": "keyline-icons:grid-circles-check-fill",
	});
}

export default Component;
