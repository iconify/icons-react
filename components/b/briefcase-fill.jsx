import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f670lubsi.css';
import '../../css/l/lko3o9_lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="f670lubsi"/><path class="lko3o9_lp"/></g>`,
		"fallback": "keyline-icons:briefcase-fill",
	});
}

export default Component;
