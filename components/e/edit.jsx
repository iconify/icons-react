import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yhpkf_bjo.css';
import '../../css/p/pb4zmyr_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yhpkf_bjo"/><path class="pb4zmyr_j"/></g>`,
		"fallback": "feather:edit",
	});
}

export default Component;
