import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/npblk6b4z.css';
import '../../css/m/m4cwzpbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="npblk6b4z"/><path class="m4cwzpbyl"/></g>`,
		"fallback": "keyline-icons:humidity-fill",
	});
}

export default Component;
