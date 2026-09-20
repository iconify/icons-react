import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t11kj5rgv.css';
import '../../css/y/y8fmnz7ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t11kj5rgv"/><path class="y8fmnz7ku"/></g>`,
		"fallback": "keyline-icons:baby-2-boy-fill",
	});
}

export default Component;
