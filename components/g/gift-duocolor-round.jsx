import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y2xwnw-it.css';
import '../../css/c/c0dyaoizv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y2xwnw-it"/><path class="c0dyaoizv"/></g>`,
		"fallback": "coolicons:gift-duocolor-round",
	});
}

export default Component;
