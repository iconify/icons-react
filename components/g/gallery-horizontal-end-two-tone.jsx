import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qkqlybmds.css';
import '../../css/e/ep56mwbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qkqlybmds"/><path class="ep56mwbtv"/></g>`,
		"fallback": "keyline-icons:gallery-horizontal-end-two-tone",
	});
}

export default Component;
