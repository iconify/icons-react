import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/womm7ibbq.css';
import '../../css/c/cfd7w6bpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="womm7ibbq"/><path class="cfd7w6bpf"/></g>`,
		"fallback": "keyline-icons:bell-dot-fill",
	});
}

export default Component;
