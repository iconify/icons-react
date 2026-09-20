import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/styz6ccuf.css';
import '../../css/u/uiueq6bgh.css';
import '../../css/h/hbr51igjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="styz6ccuf"/><path class="uiueq6bgh"/><path class="hbr51igjp"/></g>`,
		"fallback": "lets-icons:bed-light",
	});
}

export default Component;
