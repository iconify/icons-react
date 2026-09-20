import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hr3_5-bzd.css';
import '../../css/o/oh9iy2vtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hr3_5-bzd"/><path class="oh9iy2vtt"/></g>`,
		"fallback": "tabler:camera-off",
	});
}

export default Component;
