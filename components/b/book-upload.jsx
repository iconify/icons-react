import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hvo2u5b9u.css';
import '../../css/h/hbukzofay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hvo2u5b9u"/><path class="hbukzofay"/></g>`,
		"fallback": "tabler:book-upload",
	});
}

export default Component;
