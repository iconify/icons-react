import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hvoex-qty.css';
import '../../css/p/pig8tr8ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hvoex-qty"/><path class="pig8tr8ek"/></g>`,
		"fallback": "keyline-icons:fast-forward-two-tone",
	});
}

export default Component;
