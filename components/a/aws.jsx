import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu1nrd9jh.css';
import '../../css/g/g9iec9jch.css';
import '../../css/i/i7vrkybqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vu1nrd9jh"><path class="g9iec9jch"/><path class="i7vrkybqp"/></g>`,
		"fallback": "thesvg-color:aws",
	});
}

export default Component;
