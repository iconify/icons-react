import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vmfu1uq8n.css';
import '../../css/d/dy7pw87lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vmfu1uq8n"/><circle transform="rotate(45 14.828 9.172)" class="dy7pw87lu"/></g>`,
		"fallback": "majesticons:comet",
	});
}

export default Component;
