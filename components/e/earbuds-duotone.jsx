import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pc44scclm.css';
import '../../css/i/iwisbda8z.css';
import '../../css/j/jkh-81bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pc44scclm"/><path class="iwisbda8z"/><path class="jkh-81bok"/></g>`,
		"fallback": "keyline-icons:earbuds-duotone",
	});
}

export default Component;
