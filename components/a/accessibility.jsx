import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv3a_4bug.css';
import '../../css/w/wix-90b8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zv3a_4bug"/><path class="wix-90b8e"/></g>`,
		"fallback": "tdesign:accessibility",
	});
}

export default Component;
