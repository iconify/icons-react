import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/neicvubrs.css';
import '../../css/a/a1zr_kb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="neicvubrs"/><path class="a1zr_kb_y"/></g>`,
		"fallback": "keyline-icons:circle-dashed-half-duotone",
	});
}

export default Component;
