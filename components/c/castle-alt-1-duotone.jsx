import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qeh60pb0k.css';
import '../../css/s/smjp0hbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qeh60pb0k"/><path class="smjp0hbny"/></g>`,
		"fallback": "si:castle-alt-1-duotone",
	});
}

export default Component;
