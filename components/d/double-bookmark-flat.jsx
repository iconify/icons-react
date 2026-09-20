import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mv73ngbin.css';
import '../../css/x/xthe56b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mv73ngbin"/><path class="xthe56b_q"/></g>`,
		"fallback": "streamline-sharp-color:double-bookmark-flat",
	});
}

export default Component;
