import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vmp7c082d.css';
import '../../css/u/unky6y77u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vmp7c082d"/><path class="unky6y77u"/></g>`,
		"fallback": "keyline-icons:app-window-minus",
	});
}

export default Component;
