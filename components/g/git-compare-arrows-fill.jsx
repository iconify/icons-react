import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y5ms8l2it.css';
import '../../css/s/sxpj81bji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y5ms8l2it"/><path class="sxpj81bji"/></g>`,
		"fallback": "keyline-icons:git-compare-arrows-fill",
	});
}

export default Component;
