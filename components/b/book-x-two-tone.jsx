import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y39zg50mf.css';
import '../../css/j/j7rm9acvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y39zg50mf"/><path class="j7rm9acvn"/></g>`,
		"fallback": "keyline-icons:book-x-two-tone",
	});
}

export default Component;
