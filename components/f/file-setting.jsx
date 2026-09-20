import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-dghzoev.css';
import '../../css/t/t9r-o2bxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u-dghzoev"/><path class="t9r-o2bxr"/></g>`,
		"fallback": "tdesign:file-setting",
	});
}

export default Component;
