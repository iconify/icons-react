import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g8xn1jlyc.css';
import '../../css/m/mjrjjhbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g8xn1jlyc"/><path class="mjrjjhbkk"/></g>`,
		"fallback": "struq:brush",
	});
}

export default Component;
