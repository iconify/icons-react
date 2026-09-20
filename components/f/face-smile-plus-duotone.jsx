import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ysm547b_y.css';
import '../../css/d/djhz9ejxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ysm547b_y"/><path class="djhz9ejxf"/></g>`,
		"fallback": "keyline-icons:face-smile-plus-duotone",
	});
}

export default Component;
