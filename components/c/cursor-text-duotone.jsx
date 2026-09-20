import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i6ltabchy.css';
import '../../css/n/n1941ac-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i6ltabchy"/><path class="n1941ac-k"/></g>`,
		"fallback": "keyline-icons:cursor-text-duotone",
	});
}

export default Component;
