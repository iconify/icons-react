import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk4qf0b7g.css';
import '../../css/i/i13n4aclr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk4qf0b7g"/><path class="i13n4aclr"/>`,
		"fallback": "bx:bx-message-square-x",
	});
}

export default Component;
