import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asvy43bhf.css';
import '../../css/z/zc8wv1bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="asvy43bhf"/><path class="zc8wv1bah"/></g>`,
		"fallback": "tdesign:dividers",
	});
}

export default Component;
