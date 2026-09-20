import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/umnqrybiq.css';
import '../../css/h/hxwbbnbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="umnqrybiq"/><path class="hxwbbnbcd"/></g>`,
		"fallback": "keyline-icons:banknote-2-fill",
	});
}

export default Component;
