import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e65d03r4b.css';
import '../../css/h/hupx43eas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e65d03r4b"/><path class="hupx43eas"/></g>`,
		"fallback": "keyline-icons:circle-pen-two-tone",
	});
}

export default Component;
