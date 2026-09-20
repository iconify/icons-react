import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e2ld4smdn.css';
import '../../css/r/rzzzpmivf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e2ld4smdn"/><path class="rzzzpmivf"/></g>`,
		"fallback": "keyline-icons:award-two-tone",
	});
}

export default Component;
