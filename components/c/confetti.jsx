import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n8y7y967u.css';
import '../../css/u/u8l7lebee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n8y7y967u"/><path class="u8l7lebee"/></g>`,
		"fallback": "andrsrxn:confetti",
	});
}

export default Component;
