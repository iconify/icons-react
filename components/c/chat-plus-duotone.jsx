import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gojqxob8u.css';
import '../../css/s/sviu25l2e.css';
import '../../css/g/gcd2dxb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gojqxob8u"/><path class="sviu25l2e"/><path class="gcd2dxb3t"/></g>`,
		"fallback": "lets-icons:chat-plus-duotone",
	});
}

export default Component;
