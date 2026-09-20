import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dukj5j6oy.css';
import '../../css/e/efvu4_xwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dukj5j6oy"/><path class="efvu4_xwa"/></g>`,
		"fallback": "keyline-icons:contacts-two-tone",
	});
}

export default Component;
