import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6vx20buy.css';
import '../../css/c/cdgg0rydr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i6vx20buy"/><path class="cdgg0rydr"/></g>`,
		"fallback": "coolicons:chess-duotone-round",
	});
}

export default Component;
