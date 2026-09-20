import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t7xqxjb8o.css';
import '../../css/m/m4cwzpbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t7xqxjb8o"/><path class="m4cwzpbyl"/></g>`,
		"fallback": "keyline-icons:humidity-duotone",
	});
}

export default Component;
