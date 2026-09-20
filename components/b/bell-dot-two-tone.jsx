import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/abygco3fz.css';
import '../../css/n/ni6jsiptm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="abygco3fz"/><path class="ni6jsiptm"/></g>`,
		"fallback": "keyline-icons:bell-dot-two-tone",
	});
}

export default Component;
