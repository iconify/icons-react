import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ca27bzbkr.css';
import '../../css/q/q4y4c8bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ca27bzbkr"/><circle class="q4y4c8bkl"/></g>`,
		"fallback": "meteor-icons:camera",
	});
}

export default Component;
