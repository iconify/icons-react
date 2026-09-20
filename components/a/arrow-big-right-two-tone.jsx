import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ijs08ob5t.css';
import '../../css/h/hh7nn6beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ijs08ob5t"/><path class="hh7nn6beq"/></g>`,
		"fallback": "keyline-icons:arrow-big-right-two-tone",
	});
}

export default Component;
