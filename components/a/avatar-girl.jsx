import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bjz320bdo.css';
import '../../css/f/fakou0ber.css';
import '../../css/n/npa7qpbrs.css';
import '../../css/m/mr0h6_e1d.css';
import '../../css/k/kc1uacb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bjz320bdo"/><path class="fakou0ber"/><path class="npa7qpbrs"/><path class="mr0h6_e1d"/><path class="kc1uacb5e"/></g>`,
		"fallback": "withicons-bauhaus:avatar-girl",
	});
}

export default Component;
