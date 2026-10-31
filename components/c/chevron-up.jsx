import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/iro5799xn.css';
import '../../css/f/ffeem9i5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="iro5799xn"/><path class="ffeem9i5j"/></g>`,
		"fallback": "withicons-retro:chevron-up",
	});
}

export default Component;
