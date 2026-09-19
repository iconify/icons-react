import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ip7-rcbhw.css';
import '../../css/p/py7ktqbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#ciCloudUp0)"><path class="ip7-rcbhw"/></g><defs><clipPath id="ciCloudUp0"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "ci:cloud-up",
	});
}

export default Component;
