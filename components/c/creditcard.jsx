import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0x0trbdq.css';
import '../../css/y/yta3c7gqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0x0trbdq"/><path class="yta3c7gqo"/></g>`,
		"fallback": "tdesign:creditcard",
	});
}

export default Component;
