import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oz5nwc8ku.css';
import '../../css/e/enhyqdblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oz5nwc8ku"/><path class="enhyqdblk"/></g>`,
		"fallback": "akar-icons:arrow-repeat",
	});
}

export default Component;
