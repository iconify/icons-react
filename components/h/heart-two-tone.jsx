import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z500-_qbq.css';
import '../../css/z/zpv4lqb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z500-_qbq"/><path class="zpv4lqb3x"/></g>`,
		"fallback": "keyline-icons:heart-two-tone",
	});
}

export default Component;
