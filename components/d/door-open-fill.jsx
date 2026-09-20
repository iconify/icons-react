import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/naszw4bgc.css';
import '../../css/j/jlw-3trev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="naszw4bgc"/><path class="jlw-3trev"/></g>`,
		"fallback": "keyline-icons:door-open-fill",
	});
}

export default Component;
