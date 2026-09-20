import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ksg4mxbjr.css';
import '../../css/n/n4v528b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ksg4mxbjr"/><path class="n4v528b6e"/></g>`,
		"fallback": "tabler:brand-php",
	});
}

export default Component;
