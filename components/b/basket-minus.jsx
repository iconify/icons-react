import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6ix1cbtr.css';
import '../../css/l/lxcfl0bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h6ix1cbtr"/><path class="lxcfl0bel"/></g>`,
		"fallback": "tabler:basket-minus",
	});
}

export default Component;
