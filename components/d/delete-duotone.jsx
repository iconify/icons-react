import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dk-seobxs.css';
import '../../css/q/qu5h3fbqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dk-seobxs"/><path class="qu5h3fbqg"/></g>`,
		"fallback": "keyline-icons:delete-duotone",
	});
}

export default Component;
