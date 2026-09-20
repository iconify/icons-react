import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u1o9cccdo.css';
import '../../css/i/i1jzkvbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u1o9cccdo"/><path class="i1jzkvbss"/></g>`,
		"fallback": "keyline-icons:bed-double-two-tone",
	});
}

export default Component;
