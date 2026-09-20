import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ut4foe4in.css';
import '../../css/t/txdir-b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ut4foe4in"/><path class="txdir-b0u"/></g>`,
		"fallback": "si:cancel-photo-duotone",
	});
}

export default Component;
