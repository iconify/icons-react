import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hxiimb9fh.css';
import '../../css/m/mgndjsbzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hxiimb9fh"/><path clip-rule="evenodd" class="mgndjsbzf"/></g>`,
		"fallback": "majesticons:creditcard-plus",
	});
}

export default Component;
