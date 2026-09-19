import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7lk8k9wf.css';
import '../../css/c/ci11mle8k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="y7lk8k9wf"/><path class="ci11mle8k"/></g>`,
		"fallback": "cryptocurrency-color:bab",
	});
}

export default Component;
