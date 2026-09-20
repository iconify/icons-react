import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/knf9qebnr.css';
import '../../css/p/psxymtgnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="knf9qebnr"/><path class="psxymtgnv"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-end-two-tone",
	});
}

export default Component;
