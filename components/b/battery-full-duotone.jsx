import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/aewu89bmt.css';
import '../../css/l/lcrvxjb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="aewu89bmt"/><path class="lcrvxjb_a"/></g>`,
		"fallback": "keyline-icons:battery-full-duotone",
	});
}

export default Component;
