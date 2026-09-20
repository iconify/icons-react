import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k81s51n4k.css';
import '../../css/s/sicpuzlba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k81s51n4k"/><path class="sicpuzlba"/></g>`,
		"fallback": "keyline-icons:ear-listen-two-tone",
	});
}

export default Component;
