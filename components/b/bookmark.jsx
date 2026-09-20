import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxq4a2zus.css';
import '../../css/g/g73r6l1jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yxq4a2zus"/><path class="g73r6l1jr"/></g>`,
		"fallback": "tdesign:bookmark",
	});
}

export default Component;
