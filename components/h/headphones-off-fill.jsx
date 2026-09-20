import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/he_aj2bnr.css';
import '../../css/e/exbn0709o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="he_aj2bnr"/><path class="exbn0709o"/></g>`,
		"fallback": "keyline-icons:headphones-off-fill",
	});
}

export default Component;
