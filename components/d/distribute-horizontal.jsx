import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sxqx-5kxh.css';
import '../../css/u/u7bix0bgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sxqx-5kxh"/><rect transform="rotate(-90 10 17)" class="u7bix0bgt"/></g>`,
		"fallback": "majesticons:distribute-horizontal",
	});
}

export default Component;
