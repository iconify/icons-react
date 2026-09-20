import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i32qoubxj.css';
import '../../css/y/y3rzw_6hy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i32qoubxj"/><path class="y3rzw_6hy"/></g>`,
		"fallback": "tdesign:form",
	});
}

export default Component;
