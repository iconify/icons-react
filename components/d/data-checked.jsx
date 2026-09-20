import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh_t-forx.css';
import '../../css/w/wy0ye2x9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vh_t-forx"/><path class="wy0ye2x9p"/></g>`,
		"fallback": "tdesign:data-checked",
	});
}

export default Component;
