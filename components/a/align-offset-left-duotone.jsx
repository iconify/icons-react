import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/e/edk05ab4u.css';
import '../../css/l/lgp-8qlsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="edk05ab4u"/><path class="lgp-8qlsy"/></g>`,
		"fallback": "keyline-icons:align-offset-left-duotone",
	});
}

export default Component;
