import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lwaj0vjwi.css';
import '../../css/c/cc50cvs0o.css';
import '../../css/o/o2g03kuww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lwaj0vjwi"/><path class="cc50cvs0o"/><path class="o2g03kuww"/></g>`,
		"fallback": "keyline-icons:dice-1-two-tone",
	});
}

export default Component;
