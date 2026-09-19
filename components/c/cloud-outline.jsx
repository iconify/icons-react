import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0_twib3h.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#ciCloudOutline0)"><path class="j0_twib3h"/></g><defs><clipPath id="ciCloudOutline0"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "ci:cloud-outline",
	});
}

export default Component;
