import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dk__bzbcp.css';
import '../../css/t/ti345ebey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dk__bzbcp"/><path class="ti345ebey"/></g>`,
		"fallback": "keyline-icons:headphones-two-tone",
	});
}

export default Component;
