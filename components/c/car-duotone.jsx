import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lgmhi280s.css';
import '../../css/c/cpg4t9x5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lgmhi280s"/><path class="cpg4t9x5k"/></g>`,
		"fallback": "keyline-icons:car-duotone",
	});
}

export default Component;
