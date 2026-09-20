import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh_t-forx.css';
import '../../css/v/vdq8ghbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vh_t-forx"/><path class="vdq8ghbzc"/></g>`,
		"fallback": "tdesign:data-error",
	});
}

export default Component;
