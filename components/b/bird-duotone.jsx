import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d2ktcybbz.css';
import '../../css/i/ig4rehbns.css';
import '../../css/j/jbg64mbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d2ktcybbz"/><path class="ig4rehbns"/><path class="jbg64mbay"/></g>`,
		"fallback": "keyline-icons:bird-duotone",
	});
}

export default Component;
