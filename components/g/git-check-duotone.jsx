import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pi6c9vaae.css';
import '../../css/h/h1ap6db2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pi6c9vaae"/><path class="h1ap6db2k"/></g>`,
		"fallback": "keyline-icons:git-check-duotone",
	});
}

export default Component;
