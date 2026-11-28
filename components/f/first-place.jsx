import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f7_wagbic.css';
import '../../css/y/yhcxc3bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="f7_wagbic"/><path class="yhcxc3bpl"/></g>`,
		"fallback": "iconaut:first-place",
	});
}

export default Component;
