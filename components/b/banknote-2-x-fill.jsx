import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g-015mbzc.css';
import '../../css/k/knxfuxbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="g-015mbzc"/><path class="knxfuxbru"/></g>`,
		"fallback": "keyline-icons:banknote-2-x-fill",
	});
}

export default Component;
