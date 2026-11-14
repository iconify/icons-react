import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f-ymhebge.css';
import '../../css/q/q1-8fubvb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f-ymhebge"/><path class="q1-8fubvb"/></g>`,
		"fallback": "codex:headphones",
	});
}

export default Component;
