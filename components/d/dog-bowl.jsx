import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y9awzirct.css';
import '../../css/k/k-lz5j2em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y9awzirct"/><path class="k-lz5j2em"/></g>`,
		"fallback": "tabler:dog-bowl",
	});
}

export default Component;
