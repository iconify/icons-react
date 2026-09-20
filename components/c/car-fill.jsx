import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ablh0lrdu.css';
import '../../css/c/cpg4t9x5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="ablh0lrdu"/><path class="cpg4t9x5k"/></g>`,
		"fallback": "keyline-icons:car-fill",
	});
}

export default Component;
