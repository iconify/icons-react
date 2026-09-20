import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p327-5bnq.css';
import '../../css/d/d1ba28bll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p327-5bnq"/><path class="d1ba28bll"/></g>`,
		"fallback": "tabler:arrow-wave-left-down",
	});
}

export default Component;
