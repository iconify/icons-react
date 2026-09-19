import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iz8k1p-bu.css';
import '../../css/w/w3c-k-byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iz8k1p-bu"/><path class="w3c-k-byy"/></g>`,
		"fallback": "flowbite:bowl-rice-solid",
	});
}

export default Component;
