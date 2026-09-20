import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fiqwvobaq.css';
import '../../css/y/ypvgs-1rm.css';
import '../../css/v/vv3j1obhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fiqwvobaq"/><path clip-rule="evenodd" class="ypvgs-1rm"/><path class="vv3j1obhc"/></g>`,
		"fallback": "keyline-icons:coffee-duotone",
	});
}

export default Component;
