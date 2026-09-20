import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cy44qgphq.css';
import '../../css/b/bv-7_5t-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cy44qgphq"/><path class="bv-7_5t-k"/></g>`,
		"fallback": "keyline-icons:cloud-moon-duotone",
	});
}

export default Component;
