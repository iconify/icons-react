import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxw9kabfu.css';
import '../../css/f/fp9s7cc9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yxw9kabfu"/><path class="fp9s7cc9g"/></g>`,
		"fallback": "tdesign:dv",
	});
}

export default Component;
