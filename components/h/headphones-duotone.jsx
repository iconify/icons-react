import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w9_kthb0l.css';
import '../../css/i/iny7mab4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w9_kthb0l"/><path class="iny7mab4a"/></g>`,
		"fallback": "keyline-icons:headphones-duotone",
	});
}

export default Component;
